import {BASKET_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "./utils/consts/RoutesConst";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";

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
        page: CatalogPage
    }
]