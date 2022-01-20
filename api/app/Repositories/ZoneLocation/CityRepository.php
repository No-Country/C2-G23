<?php

namespace App\Repositories\ZoneLocation;

use App\Models\City;
use App\Repositories\Interfaces\RepositoryInterface;
use App\Repositories\Repository;

class CityRepository extends Repository {

    public function create(array $repositoryModel) : City
    {
        return City::create($repositoryModel);
    }
}
