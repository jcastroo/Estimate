@component('mail::message')



 A sua form "{{$form->title}}" foi criada com sucesso!

Se quiser partilhar o seu formulário, poderá utilizar o seguinte url:

@component('mail::panel')
{{$form->share_url}}
@endcomponent

Se quiser adicionar o seu formulário a um website, poderá utilizar o seguinte código:

@component('mail::panel')
 {{ '<iframe style="border:none;width:100%;" height="620px" src="'.$form->share_url.'"></iframe>' }}
@endcomponent
