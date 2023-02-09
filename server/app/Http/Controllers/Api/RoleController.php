<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Role;
use App\Models\User;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();

        return response()->json([
            'data'    => $roles
        ], 200);
    }

    public function store(CreateRoleRequest $request)
    {
        $data = $request->all();

        return response()->json([
            'message'    => 'Thêm quyền thành công !',
            'data'       => Role::create($data)
        ], 200);
    }

    public function update(UpdateRoleRequest $request, $id)
    {
        $data = $request->all();

        return response()->json([
            'message'    => 'Cập nhật quyền thành công',
            'data'       => Role::find($id)->update($data)
        ], 200);
    }

    public function delete($id)
    {
        $countUserInRole = User::where('role_id', $id)->count();
        if ($countUserInRole > 0) {
            return response()->json([
                'message'   => 'Đang có người thuộc loại quyền này nên không thể xóa !'
            ], 400);
        }

        $role = Role::find($id);

        if (!$role) {
            return response()->json([
                'message'   => 'Không tồn tại quyền này !',
            ], 400);
        }

        $checkDelete = $role->delete();

        if (!$checkDelete) {
            return response()->json([
                'message'   => 'Có lỗi xảy ra, vui lòng thử lại !'
            ], 500);
        }

        return response()->json([
            'message'   => 'Xóa loại quyền nhân viên thành công !'
        ], 200);
    }
}
