<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateRoleRequest extends FormRequest
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
            'name'   => 'required|unique:roles|max:255',
            'description'   => 'max:255'
        ];
    }

    public function messages()
    {
        return [
            'name.required'      => 'Bắt buộc nhập tên quyền !',
            'name.unique'        => 'Tên quyền phải là duy nhất !',
            'name.max'           => 'Tên quyền nhỏ hơn hoặc bằng 255 kí tự !',
            'description.max'    => 'Mô tả ngắn gọn nhỏ hơn hoặc bằng 255 kí tự !'
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
