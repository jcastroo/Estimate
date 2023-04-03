@component('mail::message')

O seu formulário "{{$form->title}}" tem uma nova submissão.

@foreach($fields as $field)
@if(isset($field['value']))

--------------------------------------------------------------------------------

**{{$field['name']}}**

{!! is_array($field['value'])?implode(',',$field['value']):$field['value']!!}

@endif
@endforeach

@endcomponent
