<?php

namespace App\Repositories\ZoneLocation;

use App\Models\Province;
use App\Repositories\Repository;

class ProvinceRepository extends Repository {

    public function create(array $repositoryModel) : Province
    {
        return Province::create($repositoryModel);
    }

    public function find(int $repositoryId) : ?Province
    {
        return Province::findOrFail($repositoryId);
    }
}
