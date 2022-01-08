<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        /** @var \App\Models\City $city */
        $city = $this;

        return [
            'id' => $city->id,
            'zone_location_id' => $this->pivot->id,
            'name' => $city->name
        ];
    }
}
