<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Slowlyo\OwlAdmin\Models\AdminUser;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Slowlyo\OwlAdmin\Controllers\AuthController as AdminAuthController;

class AuthController extends AdminAuthController
{
    public function saveUserSetting(): \Illuminate\Http\JsonResponse|\Illuminate\Http\Resources\Json\JsonResource
    {
        return $this->response()->fail('演示站点, 不支持该操作哟');
    }

    public function login(Request $request)
    {
        if (config('admin.auth.login_captcha')) {
            if (!$request->has('captcha')) {
                return $this->response()->fail(__('admin.required', ['attribute' => __('admin.captcha')]));
            }

            if (strtolower(admin_decode($request->sys_captcha)) != strtolower($request->captcha)) {
                return $this->response()->fail(__('admin.captcha_error'));
            }
        }

        try {
            $validator = Validator::make($request->all(), [
                'username' => 'required',
                'password' => 'required',
            ], [
                'username' . '.required' => __('admin.required', ['attribute' => __('admin.username')]),
                'password.required'      => __('admin.required', ['attribute' => __('admin.password')]),
            ]);

            if ($validator->fails()) {
                abort(Response::HTTP_BAD_REQUEST, $validator->errors()->first());
            }
            $adminModel = config("admin.auth.model", AdminUser::class);
            $user       = $adminModel::query()->where('username', $request->username)->first();
            if ($user && Hash::check($request->password, $user->password)) {
                $token = $user->createToken('admin')->plainTextToken;

                return $this->response()->success(compact('token'), __('admin.login_successful'));
            }

            abort(Response::HTTP_BAD_REQUEST, __('admin.login_failed') . '(admin/admin)');
        } catch (\Exception $e) {
            return $this->response()->fail($e->getMessage());
        }
    }
}
