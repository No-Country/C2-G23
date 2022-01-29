<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelRoom extends Model
{
    use HasFactory;

    protected $table='hotel_rooms';

    protected $fillable=['rooms_quantity', 'is_enabled'];

    public function information()
    {
        return $this->belongsTo(HotelRoomInformation::class, 'hri_id');
    }

    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }

    public function scopeRoomsEnabled($query)
    {
        return $query->where('is_enabled', 1);
    }

    public function scopeWhereHotelId($query, int $hotel_id)
    {
        return $query->where('hotel_id', $hotel_id);
    }
}
