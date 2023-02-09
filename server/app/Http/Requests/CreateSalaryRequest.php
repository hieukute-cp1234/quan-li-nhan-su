<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateSalaryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'salary_basic'    => 'required|numeric',
            'salary_factor'   => 'required|numeric',
            'allowance_money'  => 'numeric',
            'bonus_money'      => 'numeric',
            'insurance_premium_salary'   => 'required|numeric',
            'total_working_days_standard'  => 'required|numeric',
            'month_pay'    => 'required',
            'total_working_days'   =>  'required|numeric',
            'user_id'       => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'salary_basic.required'    => 'Bắt buộc nhập lương cơ bảng !',
            'salary_basic.numeric'     => 'Định dạng lương cơ bản phải là số !',
            'salary_factor.required'   => 'Bắt buộc nhập hệ số lương !',
            'salary_factor.numeric'    => 'Định dạng hệ số lương phải là số !',
            'allowance_money.numeric'  => 'Định dạng tiền phụ cấp phải là số !',
            'bonus_money.numeric'      => 'Định dạng tiền thưởng phải là số !',
            'insurance_premium_salary.required'    => 'Bắt buộc nhập lương đóng phải hiểm !',
            'insurance_premium_salary.numeric'     => 'Đinh dạng lương đóng bảo hiểm phải là số !',
            'total_working_days_standard.required'   => 'Bắt buộc nhập công chuẩn',
            'total_working_days_standard.numeric'   => 'Định dạng công chuẩn phải là số !',
            'month_pay.required'       => 'Bắt buộc nhập tháng trả lương !',
            'total_working_days.required' => 'Bắt buộc nhập tổng ngày tính công',
            'total_working_days.numeric' => 'Định dạng tổng ngày tính công phải là số !',
            'user_id.required'     => 'Bắt buộc chọn người cần tính lương !',
            'user_id.numeric'      => 'Định dạng phải là số !',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'error' => $validator->errors()
            ], 422)); 
    }
}
