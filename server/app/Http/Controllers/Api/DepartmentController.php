<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Models\Department;
use App\Models\User;


class DepartmentController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->query('per_page') ? $request->query('per_page') : 10;

        $departments = Department::join('users', 'departments.head_of_department_id', '=', 'users.id')
                ->select('departments.*', 'users.name as head_of_department_name')
                ->paginate($per_page);

        return response()->json([
            'data' => $departments
        ], 200);
    }

    public function show($id)
    {
        $department = Department::find($id);

        return response()->json([
            'data' => $department
        ], 200);
    }

    public function store(CreateDepartmentRequest $request)
    {
        $checkHeadOfDepartment = Department::where('head_of_department_id', '=', $request->head_of_department_id)->first();

        if ($checkHeadOfDepartment) {
            return response()->json([
                'error'   => 'Người này đang chịu trách nhiệm là trưởng ở bộ phận khác !'
            ], 400);
        }

        $data = $request->all();

        return response()->json([
            'message' => 'Tạo mới phòng ban thành công !',
            'data'    => Department::create($data)
        ], 200);
    }

    public function update(UpdateDepartmentRequest $request, $id)
    {
        $checkHeadOfDepartment = Department::where('head_of_department_id', '=', $request->head_of_department_id)->where('id', '<>', $id)->first();

        if ($checkHeadOfDepartment) {
            return response()->json([
                'message'   => 'Người này đang chịu trách nhiệm là trưởng bộ phận ở phòng ban khác !'
            ], 400);
        }

        $data = $request->all();
        
        return response()->json([
            'message'   => 'Cập nhật phòng ban thành công',
            'data'      => Department::find($id)->update($data)
        ], 200);
    }

    public function delete($id)
    {
        $countUserInDepartment = User::where('department_id', $id)->count();
        if ($countUserInDepartment > 0) {
            return response()->json([
                'message'   => 'Đang có người trong phòng ban này nên không thể xóa !'
            ], 400);
        }
        $department = Department::find($id);

        if (!$department) {
            return response()->json([
                'message'   => 'Không tồn tại phòng ban !',
            ], 400);
        }

        $checkDelete = $department->delete();
        
        if (!$checkDelete) {
            return response()->json([
                'message'   => 'Có lỗi xảy ra, vui lòng thử lại !'
            ], 500);
        }
        return response()->json([
            'message'   => 'Xóa phòng ban thành công !'
        ], 200);
    }

    public function count()
    {
        $number = Department::count();

        return response()->json([
            'message'   => 'Thành công',
            'data'    => $number
        ], 200);
    }
}
