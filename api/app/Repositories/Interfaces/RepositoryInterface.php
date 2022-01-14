<?php

namespace App\Repositories\Interfaces;


interface RepositoryInterface {
    public function create(array $repositoryModel);
    public function show();
    public function update(array $repositoryModel);
    public function remove();
    public function find(int $repositoryId);
}
