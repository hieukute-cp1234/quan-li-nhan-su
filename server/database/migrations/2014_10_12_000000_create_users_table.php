<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->tinyInteger('gender')->default(1); //1: male, 2: female
            $table->tinyInteger('work_status')->default(1); //trạng thái: làm việc, đã nghỉ,...
            $table->tinyInteger('marital_status')->default(1); //tình trạng hôn nhân: 1: single
            $table->string('start_work')->nullable();
            $table->string('end_work')->nullable();
            $table->string('card_id')->nullable();
            $table->double('salary_basic')->nullable();
            $table->double('salary_factor')->nullable();

            $table->bigInteger('manager_id');

            $table->foreignId('level_id');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('cascade');

            $table->foreignId('staff_type_id');
            $table->foreign('staff_type_id')->references('id')->on('staff_types')->onDelete('cascade');

            $table->foreignId('department_id');
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');

            $table->foreignId('role_id');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');

            $table->foreignId('specialize_id');
            $table->foreign('specialize_id')->references('id')->on('specializes')->onDelete('cascade');

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
