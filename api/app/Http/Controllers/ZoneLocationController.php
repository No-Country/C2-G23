<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProvinceCitiesCollection;
use App\Http\Resources\ProvinceCitiesResource;
use App\Http\Resources\ZoneLocationResource;
use Illuminate\Http\Request;
use App\Http\Responses\APIResponse;
use App\Services\ZoneLocationService;
use Exception;

class ZoneLocationController extends Controller
{
    public function createZoneLocation(Request $request)
    {
        try {

            $this->validate($request, [
                'province_id' => 'required|integer',
                'city_name' => 'required|string',
            ]);

            $service = new ZoneLocationService;

            $provinceId = $request->get('province_id');
            $cityName = $request->get('city_name');

            $zone = $service->addZoneLocation($provinceId, $cityName);
            $zone_resource = new ZoneLocationResource($zone);

            return APIResponse::success($zone_resource, 'OK');

        } catch (Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }

    public function showZoneLocations(Request $request)
    {
        try {
            $service = new ZoneLocationService;

            $zones = $service->getZoneLocations();
            $zones_resource = ZoneLocationResource::collection($zones);

            return APIResponse::success($zones_resource, 'OK');

       } catch (\Exception $e) {
           return APIResponse::fail($e->getMessage(), [], 500);
       }

    }

    public function showCitiesByProvince(Request $request)
    {
        try {

            $service = new ZoneLocationService;

            $zones = $service->getCitiesByProvince();

            $zones_resource = ProvinceCitiesResource::collection($zones);

            return APIResponse::success($zones_resource, 'OK');

        } catch (Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }
}
