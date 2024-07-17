<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="/aits.png"/>    
    @vite(['resources/js/app.js', 'resources/css/app.css'])
    <!--preload-links-->
    <link rel="preload" fetchpriority="high" as="font" href="./src/assets/fonts/Aktifo/Aktifo-A-Book.woff2" type="font/woff2" crossorigin="anonymous">
</head>
<body class="font-body bg-bg">
     @yield('content')
</body>
</html>