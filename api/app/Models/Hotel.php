<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $table='hotel';

    public function information() {
        return $this->belongsTo(HotelInformation::class, 'hotel_information_id', 'id');
    }

    public function location() {
        return $this->belongsTo(ZoneLocation::class, 'zone_location_id', 'id');
    }
}
