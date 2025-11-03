<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#ff0033">

    <title inertia>{{ config('app.name', 'Ferdyawan — Expression Through Chaos') }}</title>

    <!-- Primary Meta -->
    <meta name="title" content="Ferdyawan — Expression Through Chaos">
    <meta name="description"
        content="A brutalist fusion of design, code, and sound. Ferdyawan is a developer, musician, and creator from Yogyakarta who builds raw, expressive digital experiences.">
    <meta name="keywords"
        content="Ferdyawan, brutalism, portfolio, developer, musician, Yogyakarta, Laravel, React, Tailwind, AI System">
    <meta name="author" content="Ferdyawan Listanto">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://web.aisystem.id">
    <meta property="og:title" content="Ferdyawan — Expression Through Chaos">
    <meta property="og:description"
        content="A brutalist fusion of design, code, and sound. Explore the portfolio of Ferdyawan — developer, musician, and creator from Yogyakarta.">
    <meta property="og:image" content="https://web.aisystem.id/images/preview-brutal.jpg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://web.aisystem.id">
    <meta property="twitter:title" content="Ferdyawan — Expression Through Chaos">
    <meta property="twitter:description" content="A brutalist fusion of design, code, and sound from Yogyakarta.">
    <meta property="twitter:image" content="https://web.aisystem.id/images/preview-brutal.jpg">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=anton:400&display=swap" rel="stylesheet" />

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-brutal-white text-brutal-black">
    @inertia
</body>

</html>
