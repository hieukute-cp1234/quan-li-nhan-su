<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StaffType;
use App\Models\User;
use App\Http\Requests\CreateStaffTypeRequest;
use App\Http\Requests\UpdateStaffTypeRequest;

class StaffTypeController extends Controller
{
    public function index()
    {
        $types = StaffType::all();

        return response()->json([
            'data'   => $types
        ], 200);
    }

    public function store(CreateStaffTypeRequest $request)
    {
        $data = $request->all();

        return response()->json([
            'message'  => 'Tạo mới loại nhân viên thành công !',
            'data'     => StaffType::create($data)
        ], 200);
    }

    public function update(UpdateStaffTypeRequest $request, $id)
    {
        $data = $request->except('code');

        return response()->json([
            'message'   => 'Cập nhật loại nhân viên thành công',
            'data'      => StaffType::find($id)->update($data)
        ], 200);
    }

    public function delete($id)
    {
        $countUserInStaffType = User::where('staff_type_id', $id)->count();
        if ($countUserInStaffType > 0) {
            return response()->json([
                'message'   => 'Đang có người thuộc loại nhân viên này nên không thể xóa !'
            ], 400);
        }

        $staffType = StaffType::find($id);

        if (!$staffType) {
            return response()->json([
                'message'   => 'Không tồn tại loại nhân viên này !',
            ], 400);
        }

        $checkDelete = $staffType->delete();

        if (!$checkDelete) {
            return response()->json([
                'message'   => 'Có lỗi xảy ra, vui lòng thử lại !'
            ], 500);
        }
        return response()->json([
            'message'   => 'Xóa loại nhân viên thành công !'
        ], 200);
    }
}
