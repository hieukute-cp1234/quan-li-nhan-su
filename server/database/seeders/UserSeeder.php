<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = 'Admin';
        $user->email = 'hoangtranhg230499@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nội";
        $user->start_work = '11/01/2021';
        $user->card_id = '03812145623';
        $user->level_id = 1;   // Inter
        $user->manager_id = 2;
        $user->staff_type_id = 3;  // NVCT
        $user->department_id = 1;  // HB1
        $user->role_id = 1;   // Admin
        $user->specialize_id = 4; // Other
        $user->save();

        $user = new User();
        $user->name = 'TriDV';
        $user->email = 'tri.dv270999@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Thanh Hóa";
        $user->start_work = '17/09/2021';
        $user->level_id = 3;   // Junior
        $user->card_id = '174749847';
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 1;
        $user->role_id = 2;   // PM
        $user->specialize_id = 1;   // FE
        $user->save();

        $user = new User();
        $user->name = 'HieuVM';
        $user->email = 'minhhieukutecp30@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Quảng Ninh";
        $user->start_work = '12/09/2020';
        $user->level_id = 3;  // Junior
        $user->card_id = '174749847';
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 2;  // HB2
        $user->role_id = 2;  // PM
        $user->specialize_id = 2; // BE
        $user->save();

        $user = new User();
        $user->name = 'NamDT';
        $user->email = 'namdt@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nội";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1; // Inter
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1; // HB1
        $user->role_id = 4; // Dev
        $user->specialize_id = 2; // BE
        $user->save();

        $user = new User();
        $user->name = 'HaiDV';
        $user->email = 'haidv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nam";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749856';
        $user->level_id = 1; // Inter
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1; // HB1
        $user->role_id = 4; // Dev
        $user->specialize_id = 2; // BE
        $user->save();

        $user = new User();
        $user->name = 'ThaiVH';
        $user->email = 'thaivh@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Tĩnh";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749856';
        $user->level_id = 1; // Inter
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1; // HB1
        $user->role_id = 4; // Dev
        $user->specialize_id = 2; // BE
        $user->save();

        $user = new User();
        $user->name = 'ChienLX';
        $user->email = 'chienlx@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Thanh Hóa";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749856';
        $user->level_id = 1; // Inter
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 2; // HB2
        $user->role_id = 4; // Dev
        $user->specialize_id = 3; // Database
        $user->save();

        $user = new User();
        $user->name = 'MaiDT';
        $user->email = 'maidt@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nam";
        $user->start_work = '11/02/2022';
        $user->card_id = '17121345415';
        $user->level_id = 2;
        $user->manager_id = 3;
        $user->staff_type_id = 2;
        $user->department_id = 2;
        $user->role_id = 5;
        $user->specialize_id = 4;
        $user->save();

        $user = new User();
        $user->name = 'LinhDV';
        $user->email = 'linhdv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Tĩnh";
        $user->start_work = '11/02/2022';
        $user->card_id = '17121345415';
        $user->level_id = 2;
        $user->manager_id = 2;
        $user->staff_type_id = 2;
        $user->department_id = 1;
        $user->role_id = 5;
        $user->specialize_id = 4;
        $user->save();

        $user = new User();
        $user->name = 'MyDTT';
        $user->email = 'mydtt@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nam";
        $user->start_work = '11/02/2022';
        $user->card_id = '17121345415';
        $user->level_id = 2;
        $user->manager_id = 3;
        $user->staff_type_id = 2;
        $user->department_id = 2;
        $user->role_id = 5;
        $user->specialize_id = 4;
        $user->save();

        $user = new User();
        $user->name = 'ManhLV';
        $user->email = 'manhlv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Nghệ An";
        $user->start_work = '11/02/2022';
        $user->card_id = '17121345415';
        $user->level_id = 2;
        $user->manager_id = 2;
        $user->staff_type_id = 2;
        $user->department_id = 1;
        $user->role_id = 5;
        $user->specialize_id = 4;
        $user->save();

        $user = new User();
        $user->name = 'HieuVM';
        $user->email = 'hieuvm1@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Thanh Hóa";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'ManhNT';
        $user->email = 'manhnt@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nội";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'SonPC';
        $user->email = 'sonpc@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nội";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'ToanTV';
        $user->email = 'toantv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Hà Nội";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 2;
        $user->staff_type_id = 3;
        $user->department_id = 1;
        $user->role_id = 5;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'ThucDV';
        $user->email = 'thucdv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Cao Bằng";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'NamLV';
        $user->email = 'namlv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '11/01/2021';
        $user->card_id = '174749847';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'DuyenLT';
        $user->email = 'duyenlt@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '11/01/2020';
        $user->card_id = '174749124';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'ThinhNV';
        $user->email = 'thinhnv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '12/11/2020';
        $user->card_id = '174459124';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'MinhPV';
        $user->email = 'minhpv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '12/12/2019';
        $user->card_id = '174459124';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'ThoLV';
        $user->email = 'tholv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '12/01/2019';
        $user->card_id = '174459124';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();
        
        $user = new User();
        $user->name = 'DuyNKD';
        $user->email = 'duynkd@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Gia Lâm";
        $user->start_work = '13/01/2019';
        $user->card_id = '174459124';
        $user->level_id = 1;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 4;
        $user->specialize_id = 2;
        $user->save();

        $user = new User();
        $user->name = 'KienNV';
        $user->email = 'kiennv@gmail.com';
        $user->password = bcrypt('123456');
        $user->address = "Bắc Giang";
        $user->start_work = '13/07/2019';
        $user->card_id = '174459124';
        $user->level_id = 2;
        $user->manager_id = 3;
        $user->staff_type_id = 3;
        $user->department_id = 2;
        $user->role_id = 3;
        $user->specialize_id = 4;
        $user->save();

    }
}
