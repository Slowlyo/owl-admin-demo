<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Slowlyo\SlowAdmin\Renderers\Page;
use Slowlyo\SlowAdmin\Renderers\Column;
use Slowlyo\SlowAdmin\Renderers\Form\Form;
use Slowlyo\SlowAdmin\Renderers\Form\InputText;
use Slowlyo\SlowAdmin\Services\AdminRoleService;
use Slowlyo\SlowAdmin\Renderers\Form\TreeSelect;
use Illuminate\Http\Resources\Json\JsonResource;
use Slowlyo\SlowAdmin\Controllers\AdminController;
use Slowlyo\SlowAdmin\Services\AdminPermissionService;

class AdminRoleController extends AdminController
{
    protected string $serviceName = AdminRoleService::class;

    protected string $queryPath = 'admin_roles';

    protected string $pageTitle;

    public function __construct()
    {
        $this->pageTitle = __('admin.admin_roles');

        parent::__construct();
    }

    public function index(Request $request): JsonResponse|JsonResource
    {
        if ($this->actionOfGetData()) {
            $items = $this->service
                ->query()
                ->paginate($request->input('perPage', 20))
                ->items();
            $total = $this->service->query()->count();

            return $this->response()->success(compact('items', 'total'));
        }

        return $this->response()->success($this->list());
    }

    public function list(): Page
    {
        $crud = $this->baseCRUD()
            ->headerToolbar([
                $this->createButton(true),
                'bulkActions',
                amis('reload')->align('right'),
                amis('filter-toggler')->align('right'),
            ])
            ->filterTogglable(false)
            ->columns([
                Column::make()->label('ID')->name('id')->sortable(true),
                Column::make()->label(__('admin.admin_role.name'))->name('name'),
                Column::make()->label(__('admin.admin_role.slug'))->name('slug')->type('tag'),
                Column::make()->label(__('admin.created_at'))->name('created_at')->type('datetime')->sortable(true),
                Column::make()->label(__('admin.updated_at'))->name('updated_at')->type('datetime')->sortable(true),
                amis('operation')->label(__('admin.actions'))->buttons([
                    $this->rowEditButton(true),
                    $this->rowDeleteButton()->visibleOn('${slug != "administrator"}'),
                ]),
            ]);

        return $this->baseList($crud);
    }

    public function form(): Form
    {
        return $this->baseForm()->body([
            InputText::make()->label(__('admin.admin_role.name'))->name('name')->required(true),
            InputText::make()
                ->label(__('admin.admin_role.slug'))
                ->name('slug')
                ->description(__('admin.admin_role.slug_description'))
                ->required(true),
            TreeSelect::make()
                ->name('permissions')
                ->label(__('admin.admin_role.permissions'))
                ->searchable(true)
                ->multiple(true)
                ->options(AdminPermissionService::make()->getTree())
                ->labelField('name')
                ->valueField('id')
                ->autoCheckChildren(false)
                ->joinValues(false)
                ->extractValue(true),
        ]);
    }

    public function detail($id): Form
    {
        return $this->baseDetail($id)->body([]);
    }

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
