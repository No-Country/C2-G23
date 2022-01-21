<?php

namespace App\Http\Controllers;

use App\Http\Resources\HotelResource;
use App\Http\Responses\APIResponse;
use App\Services\HotelService;
use Exception;
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

    public function getHotels(Request $request)
    {
        try {

            $this->validate($request, [
                'is_all' => 'bail|required|boolean',
                'filters' => 'required_if:is_all,0|array',
                'filters.hotel_name' => 'string'
            ]);

            $service = new HotelService();

            $hotels = $service->showHotels($request->is_all);

            $hotels_resource = HotelResource::collection($hotels);

            return APIResponse::success($hotels_resource, 'OK');

        } catch (Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }

    public function showHotelsByZoneLocation(Request $request)
    {
        try {

            $this->validate($request, [
                'is_all' => 'bail|required|boolean',
                'filters' => 'required_if:is_all,0|array',
                'filters.province' => 'string',
                'filters.city' => 'string',
            ]);

            $service = new HotelService();

            $filters = $request->filters ?? [];

            $hotels = $service->showHotelsByZoneLocation($filters);

            $hotels_resource = HotelResource::collection($hotels);

            return APIResponse::success($hotels_resource, 'OK');

        } catch (Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }
}
