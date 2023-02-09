<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Specialize;
use App\Models\User;
use App\Http\Requests\CreateSpecializeRequest;
use App\Http\Requests\UpdateSpecializeRequest;

class SpecializeController extends Controller
{
    public function index()
    {
        $specializes = Specialize::all();
        
        return response()->json([
            'data'    => $specializes
        ], 200);
    }

    public function store(CreateSpecializeRequest $request)
    {
        return response()->json([
            'message'   => 'Thêm chuyên môn thành công!',
            'data'      => Specialize::create($request->all())
        ], 200);
    }

    public function update(UpdateSpecializeRequest $request, $id)
    {
        $data = $request->all();

        return response()->json([
            'message'   => 'Cập nhật chuyên môn thành công!',
            'data'      => Specialize::find($id)->update($data)
        ], 200);
    }

    public function delete($id)
    {
        $countUserInSpec = User::where('specialize_id', $id)->count();
        if ($countUserInSpec > 0) {
            return response()->json([
                'message'   => 'Đang có người thuộc chuyên môn này nên không thể xóa !'
            ], 400);
        }

        $spec = Specialize::find($id);

        if (!$spec) {
            return response()->json([
                'message'   => 'Không tồn tại chuyên môn nhân viên này !',
            ], 400);
        }

        $checkDelete = $spec->delete();

        if (!$checkDelete) {
            return response()->json([
                'message'   => 'Có lỗi xảy ra, vui lòng thử lại !'
            ], 500);
        }
        return response()->json([
            'message'   => 'Xóa chuyên môn nhân viên thành công !'
        ], 200);
    }
}
