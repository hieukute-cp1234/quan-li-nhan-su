<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class ApiAuth extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            $this->auth->parseToken()->authenticate();
            if (Auth::guard('api')->check()) {
                return $next($request);
            }
            return response()->json([
                'error' => 'unauthorization'
            ], Response::HTTP_UNAUTHORIZED);
        } catch (JWTException $e) {
            if ($e instanceof TokenInvalidException) {
                return response()->json([
                    'error' => 'Mã token không hợp lệ'
                ], Response::HTTP_UNAUTHORIZED);
            }
            if ($e instanceof TokenExpiredException) {
                return response()->json([
                    'error' => 'Token hết hạn !'
                ], Response::HTTP_UNAUTHORIZED);
            }

            return response()->json([
                'error' => 'Lỗi server'
            ], Response::HTTP_UNAUTHORIZED);
        }
    }
}
