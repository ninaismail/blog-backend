<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Contact;

use App\Http\Controllers\API\V1\ContactController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/contact_submissions', [ContactController::class, 'store']);
Route::get('/contact', [ContactController::class, 'index']);
