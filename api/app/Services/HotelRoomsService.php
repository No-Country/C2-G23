<?php

namespace App\Services;

use App\Models\Hotel;
use App\Models\HotelRoom;
use App\Repositories\HotelRooms\HotelRoomsRepository;
use App\Repositories\HotelRooms\HRInformationRepository;
use Exception;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Throwable;

class HotelRoomsService {

    protected $hriRepository;
    protected $hrRepository;

    public function __construct()
    {
        $this->hriRepository = new HRInformationRepository;
        $this->hrRepository = new HotelRoomsRepository;
    }

    public function addHotelRoom(array $hotelData, int $hotelId)
    {
        DB::beginTransaction();

        try {

            $hotelData = $this->formatData($hotelData);

            $room = new HotelRoom($hotelData['room']);

            $roomInformation = $this->hriRepository->create($hotelData['room']['detail']);

            $room->hotel()->associate(Hotel::findOrFail($hotelId));
            $room->information()->associate($roomInformation);

            $room->save();

            DB::commit();

            return $room;

        }
        catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
        catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function manageHotelRoomsData(int $hotelId, array $filters, array $paginate, array $sort) {

        try {
            $hotelRooms = $this->getHotelRoomsArray($hotelId, $filters, $paginate);
            $hotelRoomsCollection = $this->hrRepository->setOrderBy(collect($hotelRooms), $sort);
            $hotelRoomsPaginate = new LengthAwarePaginator($hotelRoomsCollection, $hotelRoomsCollection->count(), $paginate['perPage']);

            $filtersCollect = collect(['filters' => $filters, 'sorting' => $sort]);

            return $filtersCollect->merge($hotelRoomsPaginate);

        }
        catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
        catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }


    }

    private function getHotelRoomsArray(int $hotelId, array $filters) {

        $hotelRoomsQuery = $this->getHotelRooms($hotelId, $filters);
        $hotelRoomsArray =  $this->hrRepository->formatRoomData($hotelRoomsQuery);

        return $hotelRoomsArray;

    }

    private function getHotelRooms(int $hotelId, array $filters) {
        try {

            $this->hrRepository->setRoomsList($hotelId, $filters);
            $query =  $this->hrRepository->getQuery();

            return $query;
        }
        catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
        catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    private function formatData(array $roomInformation) : array
    {
        return [
            'room' => [
                'quantity' => $roomInformation['rooms_quantity'],
                'is_enabled' => $roomInformation['is_enabled'],
                'detail' => [
                    'hri_name' => $roomInformation['name'],
                    'hri_description' => $roomInformation['description'],
                    'hri_photo' => $roomInformation['photo'] ?: ''
                ]
            ]

        ];
    }

}
