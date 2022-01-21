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
Route::post('zone/province', [ZoneLocationController::class, 'createZoneProvince']);
Route::get('zone/all', [ZoneLocationController::class, 'showZoneLocations']);

Route::post('hotel', [HotelController::class, 'createHotel']);

Route::get('hotel/all', [HotelController::class, 'getHotels']);
Route::get('hotel/zoneLocation', [HotelController::class, 'showHotelsByZoneLocation']);

