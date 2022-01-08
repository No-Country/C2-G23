<?php

namespace App\Repositories\ZoneLocation;

use App\Models\Province;
use App\Repositories\Interface\RepositoryInterface;

class ProvinceRepository implements RepositoryInterface {

    public function create(array $repositoryModel) : Province
    {
        return Province::firstOrCreate($repositoryModel);
    }

    public function update(array $repositoryModel)
    {
        return null;
    }

    public function show()
    {
        return Province::all();
    }

    public function remove()
    {
        return null;
    }

    public function find(int $repositoryId) : ?Province
    {
        return Province::findOrFail($repositoryId);
    }
}
