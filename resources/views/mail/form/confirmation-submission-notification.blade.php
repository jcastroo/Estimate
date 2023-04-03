@component('mail::message', ['noBranding' => $noBranding])

{!! $form->notification_body !!}

@if($form->editable_submissions)
@component('mail::button', ['url' => $form->share_url.'?submission_id='.$submission_id])
Editar submissão
@endcomponent
@endif

@if($form->notifications_include_submission)
Estas foram as respostas registadas:

@foreach($fields as $field)
@if(isset($field['value']))

--------------------------------------------------------------------------------

**{{$field['name']}}**

{!! is_array($field['value'])?implode(',',$field['value']):$field['value']!!}

@endif
@endforeach
@endif

<p style="text-align:center"><small>Você esta a receber este mail como confirmação de submissão do seguinte formlário: <a href="{{url("forms/".$form->slug)}}">"{{$form->title}}"</a>.</small></p>

@endcomponent
