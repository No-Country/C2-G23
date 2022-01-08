<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZoneLocation extends Model
{
    use HasFactory;

    protected $table='zone_location';

    public function province() {
        return $this->belongsTo(Province::class, 'province_id', 'id');
    }

    public function city() {
        return $this->belongsTo(City::class, 'city_id', 'id');
    }
}
