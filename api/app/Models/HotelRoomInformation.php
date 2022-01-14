<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelRoomInformation extends Model
{
    use HasFactory;

    protected $table='hotel_room_information';

    protected $fillable=['hri_name', 'hri_description', 'hri_photo'];

    protected $primaryKey='hri_id';

    public function rooms()
    {
        return $this->hasMany(HotelRoom::class, 'hri_id', 'hri_id');
    }
}
