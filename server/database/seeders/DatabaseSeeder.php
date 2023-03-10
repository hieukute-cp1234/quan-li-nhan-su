<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DepartmentSeeder::class,
            RoleSeeder::class,
            SpecializeSeeder::class,
            LevelSeeder::class,
            StaffTypeSeeder::class,
            UserSeeder::class,
            SalarySeeder::class,
        ]);
    }
}
