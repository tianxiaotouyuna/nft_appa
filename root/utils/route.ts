import { ComponentType } from "react";

export const SCREEN = {
    Screen:'Screen',
    Tab: "Tab",
    Home:"Home",
    Market:"Market",
    Asset:"Asset",
    Order:"Order",
    LoginOut:"LoginOut",
    Search:"Search",
    NtfDetail:"NtfDetail",
    Buy:"Buy",
    Sell:"Sell",
    Category:"Category",
    TestHome:"TestHome",
    CoinTypeManage:"CoinTypeManage",
    CreatWallet:"CreatWallet",
    InsertWallet:"InsertWallet",
    TransferCoin:"TransferCoin",
    CenterWallet:"CenterWallet",
    CollectionDetail:"CollectionDetail",
}

/**
 * 需要登录授权的路由页面
 */
export const authRoutes = [
    SCREEN.Screen,
    SCREEN.Tab,
    SCREEN.Home,
    SCREEN.Market,
    SCREEN.Order,
    SCREEN.Asset,
    SCREEN.Market,
    SCREEN.Search,
    SCREEN.LoginOut,
    SCREEN.NtfDetail,
    SCREEN.Buy,
    SCREEN.Sell,
    SCREEN.Category,
    SCREEN.TestHome,
    SCREEN.CoinTypeManage,
    SCREEN.CreatWallet,
    SCREEN.InsertWallet,
    SCREEN.TransferCoin,
    SCREEN.CenterWallet,
    SCREEN.CollectionDetail,
]
