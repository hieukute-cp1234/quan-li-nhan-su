<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateProfileUserRequest extends FormRequest
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
            'name'     => 'max:100',
            'email'    => 'email|unique:users',
            'password' => 'min:6|max:20',
            'avatar'   => 'mimes:jpeg,jpg,png,gif|max:10000',
            'address'  => 'max:255',
            'phone'    => 'min:10|max:11',
            'gender'   => 'numeric|in:1,2,3',
            'work_status' => 'numeric|in:1,2',
            'marital_status'  => 'numeric|in:1,2,3',
            'card_id'    => 'min:9|max:12',
            'salary_basic'  => 'numeric',
            'salary_factor'  => 'numeric',
            'manager_id'  => 'numeric',
            'level_id'  => 'numeric',
            'staff_type_id' => 'numeric',
            'department_id'  => 'numeric',
            'role_id'   => 'numeric',
            'specialize_id'  => 'numeric'
        ];
    }

    public function messages()
    {
        return [
            'name.max'          => 'Tên nhỏ hơn hoặc bằng 100 kí tự !',
            'email.email'       => 'Chưa đúng định dạng email !',
            'email.unique'      => 'Email phải làm duy nhất !',
            'password.min'      => 'Mật khẩu lớn hơn hoặc bằng 6 kí tự và nhỏ hơn hoặc bằng 20 kí tự !',
            'password.max'      => 'Mật khẩu lớn hơn hoặc bằng 6 kí tự và nhỏ hơn hoặc bằng 20 kí tự !',
            'avatar.mimes'      => 'Chưa đúng định dạng ảnh (png, jpg,...)',
            'avatar.max'        => 'Size lớn nhất của ảnh là 10kb',
            'address.max'       => 'Địa chỉ nhỏ hơn hoặc bằng 255 kí tự !',
            'phone.mix'         => 'Số điện thoại lớn hơn hoặc bằng 10 kí tự và nhỏ hơn hoặc bằng 11 kí tự !',
            'phone.max'         => 'Số điện thoại lớn hơn hoặc bằng 10 kí tự và nhỏ hơn hoặc bằng 11 kí tự !',
            'gender.numeric'    => 'Giới tính phải là số !',
            'gender.in'         => 'Giới tính là các giá trị (1: male, 2: female, 3: other)',
            'work_status.numeric' => 'Trạng thái nhân viên là số',
            'work_status.in'    => 'Trạng thái nhân viên là các giá trị (1: đang làm việc, 2: đã nghỉ việc)',
            'marital_status.numeric'   => 'Tình trạng hôn nhân phải là số',
            'marital_status.in'   => 'Tình trạng hôn nhân là các giá trị (1: độc thân, 2: đã có gia đình, 3: mối quan hệ mập mờ)',
            'card_id.min'    => 'CMT lớn hơn hoặc bằng 9 kí tự và nhỏ hơn hoặc bằng 12 kí tự',
            'card_id.max'    => 'CMT lớn hơn hoặc bằng 9 kí tự và nhỏ hơn hoặc bằng 12 kí tự',
            'salary_basic.numeric'    => 'Định dạng lương cơ bản phải là kiểu số !',
            'salary_factor.numeric'   => 'Định dạng hệ số lương phải là kiểu số !',
            'manager_id.numeric'   => 'ID người quản lý phải là số !',
            'level_id.numeric'   => 'Trình độ phải là số !',
            'staff_type_id.numeric'   => 'Loại nhân viên phải là định dạng số !',
            'department_id.numeric'   => 'Phòng ban phải là số !',
            'role_id.numeric'     => 'Quyền nhân viên phải là số',
            'specialize_id.numeric'   => 'Chuyên môn phải là số !'
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
