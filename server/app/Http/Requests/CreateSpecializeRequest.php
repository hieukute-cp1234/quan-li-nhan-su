<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateSpecializeRequest extends FormRequest
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
            'name'     => 'required|max:255|unique:specializes',
            'description' => 'max:1000'
        ];
    }

    public function messages()
    {
        return [
            'name.required'    => 'Bắt buộc nhập tên!',
            'name.max'         => 'Tên chuyên môn nhỏ hơn hoặc bằng 255 kí tự!',
            'name.unique'      => 'Tên chuyên môn là duy nhất!',
            'description.max'  => 'Mô tả nhỏ hơn hoặc bằng 1000 kí tự'
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
