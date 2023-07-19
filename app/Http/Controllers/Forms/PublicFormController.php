<?php

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\AnswerFormRequest;
use App\Http\Resources\FormResource;
use App\Jobs\Form\StoreFormSubmissionJob;
use App\Models\Forms\Form;
use App\Models\Forms\FormSubmission;
use App\Service\Forms\FormCleaner;
use App\Service\WorkspaceHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Vinkla\Hashids\Facades\Hashids;

class PublicFormController extends Controller
{

    const FILE_UPLOAD_PATH = 'forms/?/submissions';
    const TMP_FILE_UPLOAD_PATH = 'tmp/';

    public function show(Request $request, string $slug)
    {
        $form = Form::whereSlug($slug)->whereIn('visibility', ['public', 'closed'])->firstOrFail();
        if ($form->workspace == null) {
            // Workspace deleted
            return $this->error([
                'message' => 'Form não encontrada.'
            ], 404);
        }

        $formCleaner = new FormCleaner();

        // Disable pro features if needed
        $form->fill($formCleaner
            ->processForm($request, $form)
            ->performCleaning($form->workspace)
            ->getData()
        );

        // Increase form view counter if not login
        if(!Auth::check()){
            $form->views()->create();
        }

        $formResource = new FormResource($form);
        $formResource->setCleanings($formCleaner->getPerformedCleanings());
        return $formResource;
    }

    public function listUsers(Request $request)
    {
        // Check that form has user field
        $form = $request->form;
        if (!$form->has_user_field) {
            return [];
        }

        // Use serializer
        $workspace = $form->workspace;
        return (new WorkspaceHelper($workspace))->getAllUsers();
    }

    public function showAsset($assetFileName)
    {
        $path = FormController::ASSETS_UPLOAD_PATH.'/'.$assetFileName;
        if (!Storage::disk('s3')->exists($path)) {
            return $this->error([
                'message' => 'Ficheiro não encontrado.',
                'file_name' => $assetFileName
            ]);
        }

        return redirect()->to(Storage::disk('s3')->temporaryUrl($path, now()->addMinutes(5)));
    }

    public function answer(AnswerFormRequest $request)
    {
        $form = $request->form;
        $submissionId = false;
        /*$formValidated=$request->validated();
        $formValidated['distance']=null;
        if ($form->editable_submissions) {*/
            $job = new StoreFormSubmissionJob($form, $request->validated());
            $job->handle();
            $submissionId = Hashids::encode($job->getSubmissionId());
            $lastSubmission = FormSubmission::where(['id'=>$job->getSubmissionId()])->first();
            $data = $lastSubmission->data;


            $data['distance']= $request->distance;
            $data['origin']= $request->origin;
            $data['destination']= $request->destination;

            $data = json_encode($data);
            FormSubmission::where(['id'=>$lastSubmission->id])->update([
                'data'=>$data
            ]);
        /*}else{
            $submissionId = StoreFormSubmissionJob::dispatch($form, $request->validated());
        }*/
        return $this->success(array_merge([
            'message' => 'Submissão da form guardado com sucesso.',
            'submission_id' => $submissionId
        ], $request->form->is_pro && $request->form->redirect_url ? [
            'redirect' => true,
            'redirect_url' => $request->form->redirect_url
        ] : [
            'redirect' => false
        ]));
    }

    public function fetchSubmission(Request $request, string $slug, string $submissionId)
    {
        $submissionId = ($submissionId) ? Hashids::decode($submissionId) : false;
        $submissionId = isset($submissionId[0]) ? $submissionId[0] : false;
        $form = Form::whereSlug($slug)->whereVisibility('public')->firstOrFail();
        if ($form->workspace == null || !$form->editable_submissions || !$submissionId) {
            return $this->error([
                'message' => 'Não Permitido.',
            ]);
        }

        $submission = FormSubmission::findOrFail($submissionId);

        if ($submission->form_id != $form->id) {
            return $this->error([
                'message' => 'Não Permitido.',
            ], 403);
        }

        return $this->success(['data' => ($submission) ? $submission->data : []]);
    }

}
