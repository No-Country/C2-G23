<?php

namespace App\Repositories\ZoneLocation;

use App\Models\ZoneLocation;
use App\Repositories\Interface\RepositoryInterface;

class ZoneLocationRepository implements RepositoryInterface {

    protected $provRepository;
    protected $cityRepository;

    public function __construct()
    {
        $this->provRepository = new ProvinceRepository;
        $this->cityRepository = new CityRepository;
    }

    public function create(array $repositoryModel)
    {
        $zoneLocation = new ZoneLocation;
        $prov = $this->provRepository->find($repositoryModel['provinceId']);
        $city = $this->cityRepository->create(['name' => $repositoryModel['cityName']]);

        $zoneLocation->province()->associate($prov);
        $zoneLocation->city()->associate($city);

        $zoneLocation->save();

        return $zoneLocation;
    }

    public function update(array $repositoryModel)
    {

    }

    public function show()
    {
        $zoneLocations = ZoneLocation::all();

        return $zoneLocations;
    }

    public function remove()
    {

    }

    public function find(int $repositoryId)
    {
        return ZoneLocation::findOrFail($repositoryId);
    }
}
