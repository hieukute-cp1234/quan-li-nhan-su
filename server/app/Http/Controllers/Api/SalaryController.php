<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Salary;
use App\Models\User;
use App\Mail\SendSalary;
use Mail;
use App\Http\Requests\CreateSalaryRequest;
use App\Http\Requests\UpdateSalaryRequest;

class SalaryController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->query('per_page') ? $request->query('per_page') : 10;
        $salaries = Salary::with('user')
            ->whereHas('user', function($query) {
                $query->where('work_status', '<>', 2);
            })
            ->orderBy('id', 'desc')->paginate($per_page);

        return response()->json([
            'data'   => $salaries
        ], 200);
    }

    public function show($id)
    {
        $salary = Salary::with('user')->where('id', $id)->first();

        return response()->json([
            'data'   => $salary
        ], 200);
    }

    public function store(CreateSalaryRequest $request)
    {

        $checkExist = Salary::where('user_id', $request->user_id)->where('month_pay', $request->month_pay)->first();

        if ($checkExist) {
            return response()->json([
                'message'   => 'Đã tính lương tháng này cho người này !'
            ], 400);
        }

        $salaryBasic = $request->salary_basic;
        $salaryFactor = $request->salary_factor;
        $allowanceMoney = $request->allowance_money ? $request->allowance_money : 0;
        $bonusMoney = $request->bonus_money ? $request->bonus_money : 0;
        $insurancePremiumSalary = $request->insurance_premium_salary;
        $monthPay = $request->month_pay;
        $totalWorkingDaysStandard = $request->total_working_days_standard;
        $totalWorkingDays = $request->total_working_days;

        $totalMoneyActualReceive = $salaryBasic * $salaryFactor +  $allowanceMoney + $bonusMoney - $insurancePremiumSalary * 0.105;


        if ($totalWorkingDaysStandard > $totalWorkingDays) {
            $totalMoneyActualReceive = ($totalMoneyActualReceive / $totalWorkingDaysStandard) * $totalWorkingDays;
        }

        $data = $request->all();
        $data['total_money_actual_receive'] = round($totalMoneyActualReceive, 2);

        return response()->json([
            'message'   => 'Tính lương thành công !',
            'data'      => Salary::create($data) 
        ]);
    }

    public function update(UpdateSalaryRequest $request, $id)
    {
        $salaryBasic = $request->salary_basic;
        $salaryFactor = $request->salary_factor;
        $allowanceMoney = $request->allowance_money ? $request->allowance_money : 0;
        $bonusMoney = $request->bonus_money ? $request->bonus_money : 0;
        $insurancePremiumSalary = $request->insurance_premium_salary;
        $monthPay = $request->month_pay;
        $totalWorkingDaysStandard = $request->total_working_days_standard;
        $totalWorkingDays = $request->total_working_days;

        $totalMoneyActualReceive = 0;

        if ($totalWorkingDaysStandard > $totalWorkingDays) {
            $totalMoneyActualReceive = ($salaryBasic * $salaryFactor / $totalWorkingDaysStandard) * $totalWorkingDays;
        } else {
            $totalMoneyActualReceive = $salaryBasic * $salaryFactor +  $allowanceMoney + $bonusMoney - $insurancePremiumSalary * 0.105;
        }

        $data = $request->all();
        $data['total_money_actual_receive'] = round($totalMoneyActualReceive, 2);

        $updated = Salary::find($id)->update($data);

        if (!$updated) {
            return response()->json([
                'message'   => 'Cập nhật thất bại',
            ], 400);
        }

        return response()->json([
            'message'   => 'Cập nhật thông tin thành công !',
        ], 200);
    }

    public function delete($id)
    {
        $salary = Salary::find($id);

        if (!$salary) {
            return response()->json([
                'message'   => 'Không tồn tại !'
            ], 404);
        }

        return response()->json([
            'message' => 'Thành công !',
            'data'    => $salary->delete()
        ], 200);
    }

    public function sendMail($id)
    {
        $salary = Salary::with('user')->where('id', $id)->first();

        if (!$salary) {
            return response()->json([
                'message'    => 'Không tồn tại'
            ], 400);
        }

        Mail::to($salary->user->email)->send(new SendSalary(
            $salary->user->name,
            $salary->salary_basic,
            $salary->salary_factor,
            $salary->allowance_money,
            $salary->bonus_money,
            $salary->insurance_premium_salary,
            $salary->month_pay,
            $salary->total_working_days_standard,
            $salary->total_working_days,
            $salary->total_money_actual_receive
        ));

        return response()->json([
            'message'   => 'Đã gửi bảng lương vào mail nhân viên !'
        ], 200);
    }

    public function sendMailAll(Request $request)
    {
        $salaries = Salary::with('user')->where('month_pay', $request->date)->get();
        for ($i = 0; $i < count($salaries); $i++) {
            Mail::to($salaries[$i]->user->email)->send(new SendSalary(
                $salaries[$i]->user->name,
                $salaries[$i]->salary_basic,
                $salaries[$i]->salary_factor,
                $salaries[$i]->allowance_money,
                $salaries[$i]->bonus_money,
                $salaries[$i]->insurance_premium_salary,
                $salaries[$i]->month_pay,
                $salaries[$i]->total_working_days_standard,
                $salaries[$i]->total_working_days,
                $salaries[$i]->total_money_actual_receive
            ));
        }

        return response()->json([
            'message'   => 'Đã gửi bảng lương vào mail nhân viên !'
        ], 200);
    }
}
