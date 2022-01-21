<?php

namespace App\Services;

use App\Models\HotelRoom;
use App\Repositories\HotelRooms\HotelRoomsRepository;
use App\Repositories\HotelRooms\HRInformationRepository;
use Illuminate\Support\Facades\DB;

class HotelRoomsService {

    protected $hrRepository;
    protected $hriRepository;

    public function __construct()
    {
        $this->hrRepository = new HotelRoomsRepository;
        $this->hriRepository = new HRInformationRepository;
    }

    public function addHotelRoom(array $roomInformation, int $hotelId)
    {
        DB::beginTransaction();

        try {
            $room = new HotelRoom;
            


        } catch (\Throwable $th) {
            //throw $th;
        }
    }

}
