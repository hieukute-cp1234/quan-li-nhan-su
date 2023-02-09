<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Specialize;

class SpecializeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $specialize = new Specialize();
        $specialize->name = 'Frontend';
        $specialize->description = 'Làm việc: sử dụng các thư viện framework như ReactJS, VueJS,... để xây dựng giao diện';
        $specialize->salary_factor = 5;
        $specialize->save();

        $specialize = new Specialize();
        $specialize->name = 'Backend';
        $specialize->description = 'Xây dựng API cho các ứng dụng';
        $specialize->salary_factor = 5;
        $specialize->save();

        $specialize = new Specialize();
        $specialize->name = 'Database';
        $specialize->description = 'Viết và tối ưu các câu truy vấn';
        $specialize->salary_factor = 6;
        $specialize->save();

        $specialize = new Specialize();
        $specialize->name = 'Other';
        $specialize->description = 'Những mục khác';
        $specialize->save();
    }
}
