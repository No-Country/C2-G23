<?php

namespace App\Repositories\HotelRooms;

use App\Models\HotelRoomInformation;
use App\Repositories\Interface\RepositoryInterface;

class HRInformationRepository implements RepositoryInterface {

    public function show()
    {
        return HotelRoomInformation::all();
    }

    public function create(array $repositoryModel)
    {
        return HotelRoomInformation::create($repositoryModel);
    }

    public function update(array $repositoryModel)
    {
        return null;
    }

    public function remove()
    {
        return null;
    }

    public function find(int $repositoryId)
    {
        return HotelRoomInformation::findOrFail($repositoryId);
    }

}
