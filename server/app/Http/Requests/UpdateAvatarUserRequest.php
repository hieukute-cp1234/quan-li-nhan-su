<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateAvatarUserRequest extends FormRequest
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
            'avatar'    => 'required|mimes:jpg,png,jpeg,bmp,svg|max:4096'
        ];
    }

    public function messages()
    {
        return [
            'avatar.required'     => 'Bắt buộc chọn ảnh !',
            'avatar.mimes'        => 'Không đúng định dạng file ảnh (jpg, png,...)',
            'avatar.max'          => 'File ảnh nhỏ hơn hoặc bằng 4 MB',
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
