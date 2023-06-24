<?php

namespace App\Admin\Controllers\DevExample;

use App\Support\Components;
use App\Services\LeftTreeRightTableService;
use Slowlyo\OwlAdmin\Controllers\AdminController;

/**
 * 开发示例 - 左树右表
 *
 * @property LeftTreeRightTableService service
 */
class LeftTreeRightTableController extends AdminController
{
    public string $serviceName = LeftTreeRightTableService::class;

    public function index()
    {
        if ($this->actionOfGetData()) {
            return $this->response()->success($this->service->list());
        }

        if ($this->actionOfExport()) {
            return $this->export();
        }

        return $this->response()->success($this->page());
    }

    public function page()
    {
        return amisMake()->Page()->body(
            amisMake()->Flex()->items([
                amisMake()->Card()->className('w-1/4 mr-5 mb-0')->body([
                    // 边栏切换
                    amisMake()->RadiosControl('treeType')->value('tree')->options([
                        ['label' => 'Tree', 'value' => 'tree'],
                        ['label' => 'Nav', 'value' => 'nav'],
                    ]),

                    amisMake()->Divider(),

                    // 用 Nav 实现边栏
                    amisMake()->Nav()->stacked()->links($this->service->tree())->visibleOn('${treeType == "nav"}')->name('tree'),
                    amisMake()->Alert()->className('mt-5')->body(
                        amisMake()->Tpl()->tpl('这里使用 Nav 作为边栏, 选中项不会被选中, GitHub 上有相关 👉 <a href="https://github.com/baidu/amis/issues/5869" target="_blank">issue</a>, 当前暂无解决方案~')
                    )->visibleOn('${treeType == "nav"}'),

                    // 用 Tree 实现边栏
                    amisMake()->Form()->id('treeForm')->wrapWithPanel(false)->target('window')->visibleOn('${treeType == "tree"}')->body(
                    // 按照 amis 示例, 这里应该是设置完 submitOnChange 和 target:window 之后就可以了
                    // 但是不生效, 曲线救国使用 onEvent 结合路径跳转实现
                        amisMake()->TreeControl('tree')->submitOnChange()->options($this->service->tree())->onEvent([
                            // 当选中项发生变化时, 触发事件
                            'change' => [
                                'actions' => [
                                    // 跳转到指定路径, 并且将选中项的值作为参数传递
                                    [
                                        'actionType' => 'url',
                                        'args'       => [
                                            'url' => '/dev_example/left_tree_right_table?tree=${tree}',
                                        ],
                                    ],
                                ],
                            ],
                        ])
                    ),
                ]),
                $this->list(),
            ])
        );
    }

    /**
     * 这里就是正常的 crud 的内容
     *
     * @return \Slowlyo\OwlAdmin\Renderers\Page
     */
    public function list()
    {
        $crud = $this->baseCRUD()
            ->headerToolbar([
                // 查看源码的按钮
                Components::make()->codeView([
                    ['title' => 'Controller', 'language' => 'php', 'path' => __FILE__],
                    [
                        'title'    => 'Service',
                        'language' => 'php',
                        'path'     => app_path('/Services/LeftTreeRightTableService.php'),
                    ],
                ])->align('right'),
            ])
            ->footerToolbar([])
            ->filterTogglable(false)
            ->columns([
                amisMake()->TableColumn('id', 'ID')->sortable(),
                amisMake()->TableColumn('title', '名称')->searchable(),
                amisMake()->TableColumn('state', '状态')->type('status'),
                amisMake()->TableColumn('image', '图片')->type('image'),
                amisMake()->TableColumn('created_at', __('admin.created_at'))->type('datetime')->sortable(true),
                amisMake()->TableColumn('updated_at', __('admin.updated_at'))->type('datetime')->sortable(true),
            ]);

        return $this->baseList($crud);
    }
}
