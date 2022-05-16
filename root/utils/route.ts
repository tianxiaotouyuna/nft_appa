import { ComponentType } from "react";

export const SCREEN = {
    Tab: "Tab",
    Home:"Home",
    Search:"Search",
    Wallet:"Wallet"
}

/**
 * 需要登录授权的路由页面
 */
export const authRoutes = [
    SCREEN.Tab,
    SCREEN.Home,
    SCREEN.Search,
    SCREEN.Wallet,
]
