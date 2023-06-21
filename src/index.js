import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserStore from "./store/UserStore";
import Cookies from 'universal-cookie';
import CategoriesStore from "./store/CategoriesStore";
import ProductsStore from "./store/ProductsStore";
import ProductStore from "./store/ProductStore";

export const Context = createContext(null)

export const gCookies = new Cookies();

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{
        user: new UserStore(),
       products: new ProductsStore(),
        categories: new CategoriesStore(),
        detailProduct: new ProductStore()
    }}>
        <App />
    </Context.Provider>,
);
