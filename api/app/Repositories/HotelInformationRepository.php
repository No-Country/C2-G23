<?php

namespace App\Repositories;

use App\Models\HotelInformation;
use App\Repositories\Interface\RepositoryInterface;

class HotelInformationRepository implements RepositoryInterface {

    public function create(array $repositoryModel) : HotelInformation
    {

        $hotelInformation = HotelInformation::create($repositoryModel);

        return $hotelInformation;
    }

    public function update(array $repositoryModel)
    {
        return null;
    }

    public function show()
    {
        return HotelInformation::all();
    }

    public function remove()
    {
        return null;
    }

    public function find(int $repositoryId)
    {
        return null;
    }
}
