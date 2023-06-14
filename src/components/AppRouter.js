import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {publicRoutes} from "../Routes";
import {SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {/*{user.isAuth && authRoutes.map(({path, Page}) =>*/}
            {/*    <Route key={path} path={path} element={<Page/>} exact/>*/}
            {/*)}*/}
            {publicRoutes.map(({path, Page}) =>
                <Route key={path} path={path} element={<Page/>} exact/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
}

export default AppRouter;