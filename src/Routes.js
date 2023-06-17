import {BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "./utils/consts/RoutesConst";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import LoginPage from "./pages/LoginPage";

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Page: MainPage
    },
    {
        path: BASKET_ROUTE,
        Page: BasketPage
    },
    {
        path: PRODUCT_ROUTE,
        Page: CatalogPage
    },
    {
        path: LOGIN_ROUTE,
        Page: LoginPage
    }
]