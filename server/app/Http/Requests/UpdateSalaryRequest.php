<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateSalaryRequest extends FormRequest
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
            'salary_basic'    => 'numeric',
            'salary_factor'   => 'numeric',
            'allowance_money'  => 'numeric',
            'bonus_money'      => 'numeric',
            'insurance_premium_salary'   => 'numeric',
            'total_working_days_standard'  => 'numeric',
            'total_working_days'   =>  'numeric',
            'user_id'       => 'numeric',
        ];
    }

    public function messages()
    {
        return [
            'salary_basic.numeric'     => 'Định dạng lương cơ bản phải là số !',
            'salary_factor.numeric'    => 'Định dạng hệ số lương phải là số !',
            'allowance_money.numeric'  => 'Định dạng tiền phụ cấp phải là số !',
            'bonus_money.numeric'      => 'Định dạng tiền thưởng phải là số !',
            'insurance_premium_salary.numeric'     => 'Đinh dạng lương đóng bảo hiểm phải là số !',
            'total_working_days_standard.numeric'   => 'Định dạng công chuẩn phải là số !',
            'total_working_days.numeric' => 'Định dạng tổng ngày tính công phải là số !',
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
