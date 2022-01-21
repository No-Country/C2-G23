<?php

namespace App\Repositories;

use App\Models\HotelInformation;
use Illuminate\Support\Facades\DB;

class HotelInformationRepository extends Repository {

    public function create(array $repositoryModel) : HotelInformation
    {

        $hotelInformation = HotelInformation::create($repositoryModel);

        return $hotelInformation;
    }

    public function showHotelsByZoneLocation(string $province, string $city) {
        return DB::table('hotel')
            ->leftJoin('hotel_information', 'hotel_information_id', '=', 'hotel.hotel_information_id')
            ->leftJoin('zone_location', 'zone_location.id', '=', 'hotel.zone_location_id')
            ->leftJoin('province', 'province.id', '=', 'zone_location.province_id')
            ->leftJoin('city', 'city.id', '=', 'zone_location.city_id')
            ->select('hotel.id',
                'hotel_information.name',
                'hotel_information.description',
                'hotel_information.photo',
                'hotel_information.phone',
            )
            ->where('province.name','',$province)
            ->where('city.name','',$city)
            ->get();
    }

    public function showHotelsByZoneLocation(string $province, string $city) {
        return DB::table('hotel')
            ->leftJoin('hotel_information', 'hotel_information_id', '=', 'hotel.hotel_information_id')
            ->leftJoin('zone_location', 'zone_location.id', '=', 'hotel.zone_location_id')
            ->leftJoin('province', 'province.id', '=', 'zone_location.province_id')
            ->leftJoin('city', 'city.id', '=', 'zone_location.city_id')
            ->select('hotel.id',
                'hotel_information.name',
                'hotel_information.description',
                'hotel_information.photo',
                'hotel_information.phone',
            )
            ->where('province.name','',$province)
            ->where('city.name','',$city)
            ->get();
    }
}
