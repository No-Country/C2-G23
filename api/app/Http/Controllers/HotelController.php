<?php

namespace App\Http\Controllers;

use App\Http\Responses\APIResponse;
use App\Services\HotelService;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function createHotel(Request $request)
    {
        try {
           $this->validate($request, [
            'hotel_information' => 'required|array',
            'hotel_information.name' => 'required|string',
            'hotel_information.description' => 'required|string',
            'hotel_information.phone' => 'nullable|numeric',
            'hotel_information.photo' => 'nullable|string',
            'zone_location' => 'required|integer',
           ]);

           $service = new HotelService();

           $hotelInformation = $request->get('hotel_information');
           $zoneLocationId = $request->get('zone_location');

           $hotel = $service->addHotel($hotelInformation, $zoneLocationId);

           return APIResponse::success($hotel, 'OK');

        } catch (\Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }
}
