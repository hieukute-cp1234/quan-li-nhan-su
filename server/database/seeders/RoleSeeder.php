<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->name = 'Admin';
        $role->description = 'Quản trị hệ thống,...';
        $role->save();

        $role = new Role();
        $role->name = 'PM';
        $role->description = 'Người quản lý dự án,...';
        $role->salary_factor = 8;
        $role->save();

        $role = new Role();
        $role->name = 'Comtor';
        $role->description = 'Người trao đổi thông tin với khách hàng và đội dev';
        $role->salary_factor = 7;
        $role->save();

        $role = new Role();
        $role->name = 'Developer';
        $role->description = 'Người trực tiếp tạo nên sản phẩm phần mềm,...';
        $role->salary_factor = 6.5;
        $role->save();

        $role = new Role();
        $role->name = 'QC';
        $role->salary_factor = 6.5;
        $role->save();
    }
}
