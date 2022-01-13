<?php

namespace App\Services;

use App\Models\Hotel;
use App\Repositories\HotelInformationRepository;
use App\Repositories\ZoneLocation\ZoneLocationRepository;
use Exception;
use Illuminate\Support\Facades\DB;

class HotelService {

    protected $hiRepository;
    protected $zlRepository;

    public function __construct()
    {
        $this->hiRepository = new HotelInformationRepository;
        $this->zlRepository = new ZoneLocationRepository;
    }


    public function addHotel(array $hotelInformation, int $zoneLocationId) {

        DB::beginTransaction();

        try {
            $hotel = new Hotel;

            $hotelInf = $this->hiRepository->create($hotelInformation);
            $zoneLoc = $this->zlRepository->find($zoneLocationId);

            $hotel->information()->associate($hotelInf);
            $hotel->location()->associate($zoneLoc);

            $hotel->save();

            DB::commit();

            return $hotel;
        }
        catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
        catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }

    }

    public function showHotels(bool $is_all, array $filters = [])
    {

        $hotel = new Hotel;

        if($is_all) {
            return $hotel::all();
        }

    }

    public function showHotelsByZoneLocation(array $filters)
    {
        try {

            $hotel = new Hotel;

            $zoneLocationRepository = new ZoneLocationRepository();

            /*????*/
            return $hotel::all();

        } catch (\Exception $e) {
            throw $e;
        }
    }
}
