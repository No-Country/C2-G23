<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HotelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'hotel_information' => [
                'id' => $this->hotel_informacion->id,
                'name' => $this->hotel_informacion->name,
                'description' => $this->hotel_informacion->description,
                'photo' => $this->hotel_informacion->photo,
                'phone' => $this->hotel_informacion->phone,
            ]
        ];
    }
}
