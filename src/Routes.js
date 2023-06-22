import {
    ACTIVATE_ROUTE,
    BASKET_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_DETAIL_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts/RoutesConst";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import LoginPage from "./pages/LoginPage";
import DetailProductPage from "./pages/DetailProductPage";
import Sms from "./components/Sms";

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
        path: CATALOG_ROUTE + '/:id',
        Page: CatalogPage
    },
    {
        path: PRODUCT_DETAIL_ROUTE + '/:id',
        Page: DetailProductPage
    },
    {
        path: LOGIN_ROUTE,
        Page: LoginPage
    },
    {
        path: REGISTRATION_ROUTE,
        Page: LoginPage
    },
    {
        path: ACTIVATE_ROUTE,
        Page: Sms
    }
]