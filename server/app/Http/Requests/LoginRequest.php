<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class LoginRequest extends FormRequest
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
            'email'     => 'required|email',
            'password'  => 'required|min:6|max:20'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Bắt buộc nhập email !',
            'email.email'    => 'Không phải định dạng email',
            'password.required' => 'Bắt buộc nhập mật khẩu !',
            'password.min'     => 'Mật khẩu lớn hơn hoặc bằng 6 kí tự',
            'password.max'     => 'Mật khẩu nhỏ hơn hoặc bằng 20 kí tự'
        ];
    }

    public function failedValidation(Validator $validator) {
       throw new HttpResponseException(
           response()->json([
               'error' => $validator->errors()
           ], 422)); 
   }
}
