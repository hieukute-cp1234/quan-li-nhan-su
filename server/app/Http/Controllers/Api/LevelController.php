<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateLevelRequest;
use App\Http\Requests\UpdateLevelRequest;
use App\Models\Level;
use App\Models\User;

class LevelController extends Controller
{
    public function index()
    {
        $levels = Level::all();

        return response()->json([
            'data'    => $levels
        ], 200);
    }

    public function store(CreateLevelRequest $request)
    {
        $data = $request->all();

        return response()->json([
            'message'   => 'Tạo mới trình độ thành công !',
            'data'      => Level::create($data)
        ], 200);
    }

    public function update(UpdateLevelRequest $request, $id)
    {
        $data = $request->all();

        return response()->json([
            'message'    => 'Cập nhật trình độ thành công !',
            'data'       => Level::find($id)->update($data)
        ], 200);
    }

    public function delete($id)
    {
        $countUserInLevel = User::where('level_id', $id)->count();
        if ($countUserInLevel > 0) {
            return response()->json([
                'message'   => 'Đang có người ở trình độ này nên không thể xóa !'
            ], 400);
        }

        $level = Level::find($id);

        if (!$level) {
            return response()->json([
                'message'   => 'Không tồn tại loại trình độ nhân viên này !',
            ], 400);
        }

        $checkDelete = $level->delete();

        if (!$checkDelete) {
            return response()->json([
                'message'   => 'Có lỗi xảy ra, vui lòng thử lại !'
            ], 500);
        }
        return response()->json([
            'message'   => 'Xóa loại trình độ nhân viên thành công !'
        ], 200);
    }
}
