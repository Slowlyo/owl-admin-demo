<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Request;

class AdminRoleController extends \Slowlyo\OwlAdmin\Controllers\AdminRoleController
{
    public function destroy($ids)
    {
        return $this->response()->fail('演示站点, 不支持该操作哟');
    }

    public function store(Request $request)
    {
        return $this->response()->fail('演示站点, 不支持该操作哟');
    }

    public function update(Request $request)
    {
        return $this->response()->fail('演示站点, 不支持该操作哟');
    }
}
