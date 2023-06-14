import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserStore from "./store/UserStore";
import Cookies from 'universal-cookie';
// import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)

export const gCookies = new Cookies();

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Context.Provider value={{
        user: new UserStore(),
       // device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
);
