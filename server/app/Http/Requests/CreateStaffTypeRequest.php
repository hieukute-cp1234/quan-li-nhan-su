<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateStaffTypeRequest extends FormRequest
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
            'code'   => 'required|max:10|unique:staff_types',
            'name'   => 'required|max:255'
        ];
    }

    public function messages()
    {
        return [
            'code.required'   => 'Bắt buộc nhập mã loại nhân viên',
            'code.max'       => 'Mã loại nhân viên nhỏ hơn hoặc bằng 10 kí tự',
            'code.unique'    => 'Mã loại nhân viên là duy nhất !',
            'name.required'    => 'Bắt buộc nhập loại nhân viên',
            'name.max'        => 'Tên loại nhân viên nhỏ hơn hoặc bằng 255 kí tự'
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
