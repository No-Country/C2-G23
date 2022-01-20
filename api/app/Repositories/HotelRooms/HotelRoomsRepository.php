<?php

namespace App\Repositories\HotelRooms;

use App\Models\HotelRoom;
use App\Repositories\Repository;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class HotelRoomsRepository extends Repository {

    protected $query;

    public function __construct()
    {
        $this->query = new HotelRoom;

    }

    public function show()
    {
        return HotelRoom::all();
    }

    public function find(int $repositoryId)
    {
        return HotelRoom::findOrFail($repositoryId);
    }

    public function getQuery(string $groupBy = 'hotel_room_id')
    {
        $this->groupBy($groupBy);
        return $this->query->get();
    }

    private function groupBy(string $column)
    {
        $this->query->groupBy($column);
    }

    public function setRoomsList(int $hotelId, array $filters = [])
    {
        $this->setHotel($hotelId);
        $this->query->with('hotel', 'information');
        $this->query->roomsEnabled();

    }

    private function setHotel(int $hotelId)
    {
        $this->query = $this->query::whereHotelId($hotelId);
    }

    public function formatRoomData(Collection $rooms) : array
    {
        return $rooms->map(function (HotelRoom $room) {

            $detail = $room->information;

            return [
                'id' => $room->hotel_room_id,
                'quantity' => $room->rooms_quantity,
                'created' => Carbon::parse($room->created_at)->format('m/d/Y g:i A'),
                'detail' => [
                    'name' => $detail->hri_name,
                    'description' => $detail->hri_description,
                    'photo' => $detail->hri_photo
                ]
            ];

        })->all();

    }

    public function setOrderBy($rooms, $sort)
    {
        $desc = strtolower($sort['orderBy']) == 'desc';

        $rooms = $rooms->sortBy($sort['sortBy'], SORT_REGULAR, $desc);

        return $rooms;
    }


}
