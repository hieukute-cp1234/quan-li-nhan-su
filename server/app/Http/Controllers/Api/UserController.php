<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\StaffType;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateAvatarUserRequest;
use App\Http\Requests\UpdateProfileUserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getAllPM()
    {
        $pm = User::where('role_id', 2)->select()->get();

        return response()->json([
            'data'   => $pm
        ], 200);
    }

    public function addNewUser(CreateUserRequest $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt($data['password']);

        return response()->json([
            'message'   => 'Tạo mới nhân viên thành công',
            'data'      => User::create($data) 
        ]);
    }

    public function getAllUsers(Request $request)
    {
        $users = User::orderBy('id', 'desc')->get();

        return response()->json([
            'data'   => $users
        ], 200);
    }

    public function updateAvatar(UpdateAvatarUserRequest $request)
    {
        $user = User::find(auth()->user()->id);
        if ($request->file('avatar')) {
            $file_path = $request->file('avatar')->store('uploads');
            $user->avatar = $file_path;
        }

        $user->save();

        return response()->json([
            'message'   => 'Upload ảnh thành công !'
        ], 200);
    }

    public function updateProfile(UpdateProfileUserRequest $request, $id)
    {
        if (Auth::user()->role_id == 1 || Auth::user()->id === $id) {

            $data = $request->all();
            if ($request->password) {
                $data['password'] = bcrypt($request->password);
            }

            $updated = User::find($id)->update($data);
            if (!$updated) {
                return response()->json([
                    'message'   => 'Cập nhật thất bại',
                ], 400);
            }
            return response()->json([
                'message'   => 'Cập nhật thông tin thành công !',
            ], 200);
        }
        return response()->json([
            'message'   => 'Bạn không có quyền cập nhật thông tin của người này !',
        ], 400);
    }

    public function countUser()
    {
        $number = User::count();

        return response()->json([
            'message'    => 'Thành công',
            'data'    => $number,
        ], 200);
    }

    public function getById($id)
    {
        $user = User::with(['level', 'role', 'department', 'specialize'])->where('id', $id)->get();

        $data = $user[0];

        $staffType = StaffType::find($data->staff_type_id);
        $manager = User::with(['level', 'role', 'department', 'specialize'])->where('id', $data->manager_id)->get()[0];

        $data['type'] = $staffType;
        $data['manager'] = $manager;

        return response()->json([
            'message'   => 'Thành công !',
            'data'      => $data,
        ], 200);
    }
}
