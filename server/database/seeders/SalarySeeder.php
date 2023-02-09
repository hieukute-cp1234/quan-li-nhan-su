<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Salary;

class SalarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $salary = new Salary();
        $salary->salary_basic = 1390000;
        $salary->salary_factor = 6.8;
        $salary->allowance_money = 1100000;
        $salary->bonus_money = 0;
        $salary->insurance_premium_salary = 4730000;
        $salary->month_pay = "02/2022";
        $salary->total_working_days = 23;
        $salary->total_working_days_standard = 23;
        $salary->total_money_actual_receive = 11000000;
        $salary->user_id = 2;
        $salary->save();

        $salary = new Salary();
        $salary->salary_basic = 1390000;
        $salary->salary_factor = 7.8;
        $salary->allowance_money = 1100000;
        $salary->bonus_money = 100000;
        $salary->insurance_premium_salary = 4730000;
        $salary->month_pay = "03/2022";
        $salary->total_working_days = 23;
        $salary->total_working_days_standard = 23;
        $salary->total_money_actual_receive = 12000000;
        $salary->user_id = 3;
        $salary->save();
    }
}
