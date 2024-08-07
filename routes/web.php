<?php

use App\Models\BlogPost;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/careers', function () {
    return view('careers');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/industries', function () {
    return view('industries/index');
});
Route::get('/industries/success-stories/{slug}', function ($slug) {
    return view('industries.show', ['slug' => $slug]);
});
Route::get('/resources', function () {
    return view('resources/index');
});
Route::get('/resources/blog', function () {
    return view('resources/blog/index');
});
Route::get('/resources/blog/{slug}', function ($slug) {
    return view('resources/blog.show', ['slug' => $slug]);
});
Route::get('/resources/industry-insights', function () {
    return view('resources/industry-insights/index');
});
Route::get('/resources/industry-insights/{slug}', function ($slug) {
    return view('resources/industry-insights.show', ['slug' => $slug]);
});