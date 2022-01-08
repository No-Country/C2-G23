<?php

namespace App\Services;

use App\Models\ZoneLocation;
use App\Repositories\ZoneLocation\CityRepository;
use App\Repositories\ZoneLocation\ProvinceRepository;
use App\Repositories\ZoneLocation\ZoneLocationRepository;
use Exception;
use Illuminate\Support\Facades\DB;

class ZoneLocationService {

    public function addZoneLocation(int $provinceId, string $cityName) {
        DB::beginTransaction();

        try {
            $zoneLocationRepository = new ZoneLocationRepository();

            $repositoryModel = compact("provinceId", "cityName");

            $zone = $zoneLocationRepository->create($repositoryModel);

            DB::commit();

            return $zone;
        }
        catch(Exception $e) {
            DB::rollBack();
            throw $e;
        }
        catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function getZoneLocations()
    {
        try {
            $zoneLocationRepository = new ZoneLocationRepository();

            return $zoneLocationRepository->show();

        } catch (Exception $e) {
            throw $e;
        }
    }

    public function getCitiesByProvince()
    {
        try {
            $provinceRepository = new ProvinceRepository;

            return $provinceRepository->show();

        } catch (\Exception $e) {
            throw $e;
        }
    }
}
