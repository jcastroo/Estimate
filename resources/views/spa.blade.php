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
      'amplitude_code' => config('services.amplitude_code'),
      'crisp_website_id' => config('services.crisp_website_id'),
  ];
@endphp

<!DOCTYPE html>


<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  @vite('resources/js/app.js')

  <link rel="icon" href="{{asset('/img/logob.png')}}">

  <title>Setup Estimate</title>



</head>
<body>
<div id="app"></div>

</body>
</html>

</body>
</html>

