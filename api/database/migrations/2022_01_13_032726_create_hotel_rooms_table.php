<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotel_rooms', function (Blueprint $table) {
            $table->id('hotel_room_id');
            $table->boolean('is_enabled');
            $table->unsignedSmallInteger('rooms_quantity');
            $table->foreignId('hotel_id')->nullable(false)->constrained('hotel');
            $table->foreignId('hri_id')->nullable(false)->constrained('hotel_room_information', 'hri_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotel_rooms');
    }
}
