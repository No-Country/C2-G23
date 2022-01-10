<?php

use App\Http\Controllers\HotelController;
use App\Http\Controllers\ZoneLocationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('zone', [ZoneLocationController::class, 'createZoneLocation']);

Route::get('zone/all', [ZoneLocationController::class, 'showZoneLocations']);
Route::get('zone/cities', [ZoneLocationController::class, 'showCitiesByProvince']);

Route::post('hotel', [HotelController::class, 'createHotel']);
