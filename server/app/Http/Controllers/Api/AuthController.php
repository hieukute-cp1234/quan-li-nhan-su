<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->only(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json([
                'message' => 'Sai tài khoản hoặc mật khẩu'
            ], 401);
        }

        return response()->json([
            'message' => 'Đăng nhập thành công !',
            'token' => $token
        ], 200);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json([
            'data'   => auth()->user()
        ], 200);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json([
            'message' => 'Đăng xuất thành công'
        ], 200);
    }

    public function callbackLoginGoogle(Request $request)
    {
        $accessToken = $request->access_token;
        $userAccess = file_get_contents("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".$accessToken);
        $emailAccess = json_decode($userAccess)->email;
        $user = User::where('email', $emailAccess)->first();

        if (!$user) {
            return response()->json([
                'message'    => 'Không tồn tại user !'
            ], 400);
        }

        $tokenAccess = JWTAuth::fromUser($user);

        return response()->json([
            'message'   => 'Đăng nhập thành công !',
            'token'    => $tokenAccess
        ], 200);
    }
}
