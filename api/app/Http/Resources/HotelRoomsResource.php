<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class HotelRoomsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data = $this;
        $rooms = $data['data'];
        $filters = $data['filters'];
        $sort = $data['sorting'];

        return [
            'filters' => $filters,
            'rooms' => $rooms,
            'sort' => [
                'orderBy' => $sort['orderBy'],
                'sortBy' => $sort['sortBy']
            ],
            'pagination' => [
                'first_page_url'    => $data['first_page_url'],
                "from"              => $data['from'],
                "last_page"         => $data['last_page'],
                "last_page_url"     => $data['last_page_url'],
                "next_page_url"     => $data['next_page_url'],
                "path"              => $data['path'],
                "per_page"          => $data['per_page'],
                "prev_page_url"     => $data['prev_page_url'],
                "to"                => $data['to'],
                "total"             => $data['total']
            ]
        ];
    }
}
