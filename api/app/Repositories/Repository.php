<?php

namespace App\Repositories;

use App\Repositories\Interfaces\RepositoryInterface;

class Repository implements RepositoryInterface {

    protected $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function show()
    {
        return null;
    }

    public function create(array $repositoryModel)
    {
        return null;
    }

    public function update(array $repositoryModel)
    {
        return null;
    }

    public function remove(int $repositoryId)
    {
        return null;
    }

    public function find(int $repositoryId)
    {
        return null;
    }

    protected function isValidFilter($filter) {
        return !empty($this->filters) && isset($this->filters[$filter]) && !empty($this->filters[$filter]);
    }
}
