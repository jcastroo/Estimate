@php
  $config = [
      'appName' => config('app.name'),
      'locale' => $locale = app()->getLocale(),
      'locales' => config('app.locales'),
      'githubAuth' => config('services.github.client_id'),
      'notion' => [
          'worker' => config('services.notion.worker'),
      ],
      'links' => config('links'),
      'production' => App::isProduction(),
      'hCaptchaSiteKey' => config('services.h_captcha.site_key'),
      'google_analytics_code' => config('services.google_analytics_code'),
      'amplitude_code' => config('services.amplitude_code'),
      'crisp_website_id' => config('services.crisp_website_id'),
  ];
@endphp
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<!DOCTYPE html>
=======
  <!DOCTYPE html>
>>>>>>> parent of f37accd (s)
=======
  <!DOCTYPE html>
>>>>>>> parent of f37accd (s)
=======
  <!DOCTYPE html>
>>>>>>> parent of f37accd (s)
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  @vite('resources/js/app.js')

  <link rel="icon" href="{{asset('/img/logob.png')}}">

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  <title>ola mundo</title>
=======
=======
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
  @if($meta)
    <title>{{$meta['title']}}</title>
    <meta name='description' content='{{$meta['description']}}'>

    <meta name='og:title' content='{{$meta['title']}}'>
    <meta name='og:description' content='{{$meta['description']}}'>
    <meta name='og:image' content='{{$meta['image']}}'>
    <meta name='og:site_name' content='OpenForm'>

    <meta name="twitter:title" content="{{$meta['title']}}">
    <meta name="twitter:description" content="{{$meta['description']}}">
    <meta name="twitter:image" content="{{$meta['image']}}">
  @endif

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
</head>
<body>
<div id="app"></div>

{{-- Global configuration object --}}
<script>
  window.config = @json($config);
  window.$crisp = []
</script>


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


</body>
</html>

=======
=======
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
@if($config['google_analytics_code'])
<!-- Global site tag (gtag.js) - Google Analytics -->
<script defer src="https://www.googletagmanager.com/gtag/js?id={{ $config['google_analytics_code'] }}"></script>
<script defer>
  window.dataLayer = window.dataLayer || []

  function gtag () {dataLayer.push(arguments)}

  gtag('js', new Date())

  gtag('config', "{{ $config['google_analytics_code'] }}" {{ \Illuminate\Support\Facades\App::isProduction() ? '' : ', { send_page_view: false, debug_mode:true  }' }})
</script>
@endif

</body>
</html>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
=======
>>>>>>> parent of f37accd (s)
