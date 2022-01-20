<?php

namespace App\Http\Controllers;

use App\Http\Resources\HotelRoomsResource;
use App\Http\Resources\RoomResource;
use App\Http\Responses\APIResponse;
use App\Models\HotelRoom;
use App\Services\HotelRoomsService;
use Exception;
use Illuminate\Http\Request;

class HotelRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showByHotelId(Request $request)
    {
        try {

            $this->validate($request, [
                'hotel_id' => 'required|integer',
                'paginate' => 'nullable|array',
                'paginate.perPage' => 'nullable|integer'
            ]);

            $hotelId = $request->get('hotel_id');
            $filters = $request->filters ?? [];
            $sort = $request->sort ?? ['sortBy' => 'created', 'orderBy' => 'desc'];
            $paginate = $request->paginate ?? ['perPage' => 20];

            $hRoomsService = new HotelRoomsService();

            $roomsData = $hRoomsService->manageHotelRoomsData($hotelId, $filters, $paginate, $sort);

            $roomsResource = new HotelRoomsResource($roomsData);



            return APIResponse::success($roomsResource, 'OK');


        } catch (Exception $e) {
            return APIResponse::fail($e->getMessage(), [], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HotelRoom  $hotelRoom
     * @return \Illuminate\Http\Response
     */
    public function edit(HotelRoom $hotelRoom)
    {
        //
    }
}
