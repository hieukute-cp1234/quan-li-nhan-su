<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $department = new Department();
        $department->code = 'HB1';
        $department->name = 'Bộ phận HB1';
        $department->description = 'Chuyên xây dựng ứng dụng Android, IOS dựa trong React Native, PHP,...';
        $department->head_of_department_id = 2;
        $department->save();

        $department = new Department();
        $department->code = 'HB2';
        $department->name = 'Bộ phận HB2';
        $department->description = 'Chuyên xây dựng ứng dụng web dựa trên ReactJS, NodeJS, PHP,...';
        $department->head_of_department_id = 3;
        $department->save();
    }
}
