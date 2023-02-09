<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateDepartmentRequest extends FormRequest
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
            'code'        => 'required|max:10|unique:departments',
            'name'        => 'required|max:255',
            'status'      => 'numeric|in:0,1',
            'description' => 'max:1000',
            'head_of_department_id' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            'code.required'    => 'Bắt buộc nhập mã phòng ban !',
            'code.max'         => 'Mã phòng ban nhỏ hơn hoặc bằng 10 kí tự !',
            'code.unique'      => 'Mã phòng ban là duy nhất',
            'name.required'    => 'Bắt buộc nhập tên phòng ban !',
            'name.max'         => 'Tên phòng ban nhỏ hơn hoặc bằng 255 kí tự !',
            'status.numeric'   => 'Trạng thái phải là số !',
            'status.in'        => 'Trạng thái phải là 0 hoặc 1 !',
            'description.max'  => 'Mô tả ngắn gọn, nhỏ hơn hoặc bằng 1000 kí tự !',
            'head_of_department_id.required'  => 'Bắt buộc phải có người đứng đầu phòng ban !',
            'head_of_department_id.numeric'   => 'Yêu cầu nhập mã số người đứng đầu phòng ban !'
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
