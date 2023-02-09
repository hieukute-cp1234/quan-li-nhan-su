<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\StaffType;

class StaffTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type = new StaffType();
        $type->code = 'NVTV';
        $type->name = 'Nhân viên thời vụ';
        $type->salary_factor = 4;
        $type->save();

        $type = new StaffType();
        $type->code = 'NVTT';
        $type->name = 'Nhân viên thực tập';
        $type->salary_factor = 2;
        $type->save();

        $type = new StaffType();
        $type->code = 'NVCT';
        $type->name = 'Nhân viên chính thức';
        $type->salary_factor = 5;
        $type->save();
    }
}
