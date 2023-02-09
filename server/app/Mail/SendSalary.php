<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendSalary extends Mailable
{
    use Queueable, SerializesModels;

    protected $userName;
    protected $salaryBasic;   // Luong co ban 
    protected $salaryFactor;   //Hso luong
    protected $allowanceMoney;  // Phu cap
    protected $bonusMoney;   // thuong
    protected $insurancePremiumSalary; // Luong dong bao hiem
    protected $monthPay; // Thang tra luong
    protected $totalWorkingDaysStandard; // Cong chuan
    protected $totalWorkingDays; // So ngay tinh cong
    protected $totalMoneyActualReceive; // Tien thuc nhan

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(
        $userName,
        $salaryBasic,
        $salaryFactor,
        $allowanceMoney,
        $bonusMoney,
        $insurancePremiumSalary,
        $monthPay,
        $totalWorkingDaysStandard,
        $totalWorkingDays,
        $totalMoneyActualReceive
    )
    {
        $this->userName = $userName;
        $this->salaryBasic = $salaryBasic;
        $this->salaryFactor = $salaryFactor;
        $this->allowanceMoney = $allowanceMoney;
        $this->bonusMoney = $bonusMoney;
        $this->insurancePremiumSalary = $insurancePremiumSalary;
        $this->monthPay = $monthPay;
        $this->totalWorkingDaysStandard = $totalWorkingDaysStandard;
        $this->totalWorkingDays = $totalWorkingDays;
        $this->totalMoneyActualReceive = $totalMoneyActualReceive;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('salary', [
            'userName'     => $this->userName,
            'salaryBasic'  => $this->salaryBasic,
            'salaryFactor'  => $this->salaryFactor,
            'allowanceMoney' => $this->allowanceMoney,
            'bonusMoney'    => $this->bonusMoney,
            'insurancePremiumSalary' => $this->insurancePremiumSalary,
            'monthPay'   => $this->monthPay,
            'totalWorkingDaysStandard'   => $this->totalWorkingDaysStandard,
            'totalWorkingDays'   => $this->totalWorkingDays,
            'totalMoneyActualReceive'  => $this->totalMoneyActualReceive
        ]);
    }
}
