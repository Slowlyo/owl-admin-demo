import RightContent from '@/components/RightContent'
import {Settings as LayoutSettings} from '@ant-design/pro-components'
import {SettingDrawer} from '@ant-design/pro-components'
import type {RunTimeLayoutConfig} from '@umijs/max'
import {history} from '@umijs/max'
import defaultSettings from '../config/defaultSettings'
import {errorConfig} from './requestErrorConfig'
import {adminService} from "@/services/admin"
import {parseRoutes} from "@/utils/dynamicRoutes"
import {getSettingItem, saveSetting} from '@/utils/setting'
import 'animate.css'
import {forwardRef} from "react"
import RcQueueAnim from "rc-queue-anim"
import {ToastComponent} from "amis";
import {setLocale} from "@@/plugin-locale";

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '#/user/login'

// @ts-ignore
const layoutSetting = window.slowAdminConfig.layoutSetting
// @ts-ignore 是否启用主题修改工具
const showSettingDrawer = slowAdminConfig.themeSettingDrawer

// @ts-ignore 合并配置
defaultSettings = {defaultSettings, ...layoutSetting}

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
    settings?: Partial<LayoutSettings>;
    currentUser?: any;
    loading?: boolean;
    fetchUserInfo?: () => Promise<any>;
}> {
    const fetchUserInfo = async () => {
        try {
            const result: any = await adminService.queryCurrentUser()

            if (result?.code == 401) {
                window.location.href = loginPath
                return
            }

            return result.data
        } catch (error) {
            window.location.href = loginPath
        }
        return undefined
    }

    // 如果不是登录页面，执行
    if (window.location.hash !== loginPath) {
        const currentUser = await fetchUserInfo()
        return {
            fetchUserInfo,
            currentUser,
            settings: defaultSettings,
        }
    }
    return {
        fetchUserInfo,
        settings: defaultSettings,
    }
}

let extraRoutes: any

export function patchClientRoutes({routes}: any) {
    // 根据 extraRoutes 对 routes 做一些修改
    parseRoutes(extraRoutes, routes)
}

export function render(oldRender: any) {
    adminService.getSettings().then((result) => {
        if (result.status == 0) {
            saveSetting(result.data)
            setLocale(result.data.locale == 'en' ? 'en-US' : result.data.locale)
        }
    })

    adminService.queryMenu().then((res) => {
        if(res?.data?.status != 1){
            extraRoutes = res?.data
        }
        oldRender()
    })
}

// 处理菜单图标
const menuIconHandler = (menu: any) => {
    menu.forEach((item: any) => {
        if (item?.icon) {
            item.icon = (<i className={item.icon}></i>)
        }
        if (item?.routes) {
            item.routes = menuIconHandler(item.routes)
        }
    })
    return menu
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
    return {
        rightContentRender: () => <RightContent/>,
        // 这里是 jio 如果你需要可以自行打开
        // footerRender: () => <Footer />,
        onPageChange: () => {
            const {location} = history
            // 如果没有登录，重定向到 login
            if (!initialState?.currentUser && location.pathname !== loginPath) {
                window.location.href = loginPath
            }
        },
        layoutBgImgList: [],
        links: [],
        breadcrumbRender: () => undefined,
        menuHeaderRender: undefined,
        disableMobile: true,
        // 自定义 403 页面
        // unAccessible: <div>unAccessible</div>,
        childrenRender: (children, props) => {
            // 动画
            const Anim = forwardRef((props, ref) => {
                return (
                    // alpha left right top bottom scale scaleBig scaleX scaleY
                    <RcQueueAnim ref={ref} duration={650} type="top">
                        <div key={location.pathname}>
                            {children}
                        </div>
                    </RcQueueAnim>
                )
            })

            return (
                <>
                    <ToastComponent key='toast'/>
                    <Anim/>
                    {(!props.location?.pathname?.includes('/login')) && (
                        <div style={{
                            display: showSettingDrawer ? 'block' : 'none',
                        }}>
                            <SettingDrawer
                                disableUrlParams
                                enableDarkTheme
                                settings={initialState?.settings}
                                onSettingChange={(settings) => {
                                    setInitialState((preInitialState) => ({
                                        ...preInitialState,
                                        settings,
                                    }))
                                }}
                            />
                        </div>
                    )}
                </>
            )
        },
        title: getSettingItem('app_name'),
        logo: getSettingItem('logo'),
        menu: {
            locale: false,
            request: async () => {
                adminService.getSettings().then((result) => {
                    if (result.status == 0) {
                        saveSetting(result.data)
                    }
                })

                const result: any = await adminService.queryMenu()

                return menuIconHandler(result.data)
            }
        },
        ...initialState?.settings,
    }
}

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
    ...errorConfig,
}
