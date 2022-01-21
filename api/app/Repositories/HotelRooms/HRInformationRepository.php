<?php

namespace App\Repositories\HotelRooms;

use App\Models\HotelRoomInformation;
use App\Repositories\Repository;

class HRInformationRepository extends Repository {

    public function show()
    {
        return HotelRoomInformation::all();
    }

    public function create(array $repositoryModel) : HotelRoomInformation
    {
        return HotelRoomInformation::create($repositoryModel);
    }

    public function find(int $repositoryId)
    {
        return HotelRoomInformation::findOrFail($repositoryId);
    }

}
