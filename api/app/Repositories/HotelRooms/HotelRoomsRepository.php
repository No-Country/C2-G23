<?php

namespace App\Repositories\HotelRooms;

use App\Models\HotelRoom;
use App\Repositories\Interface\RepositoryInterface;

class HotelRoomsRepository implements RepositoryInterface {

    public function show()
    {
        return HotelRoom::all();
    }

    public function create(array $repositoryModel)
    {
        return null;
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
        return HotelRoom::findOrFail($repositoryId);
    }

}
