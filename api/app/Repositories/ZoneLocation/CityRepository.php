<?php

namespace App\Repositories\ZoneLocation;

use App\Models\City;
use App\Repositories\Interface\RepositoryInterface;

class CityRepository implements RepositoryInterface {

    public function create(array $repositoryModel) : City
    {
        return City::create($repositoryModel);
    }

    public function update(array $repositoryModel)
    {
        return null;
    }

    public function show()
    {
        return null;
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
