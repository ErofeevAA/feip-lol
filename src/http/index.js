import axios from "axios";
import { useNavigate } from "react-router-dom"
import {refresh} from "./userAPI";
import {LOGIN_ROUTE} from "../utils/consts/RoutesConst";

const url = 'http://localhost:8080/'

const $host = axios.create({
    baseURL: url
})

const $authHost = axios.create({
    baseURL: url
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)


$authHost.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 403) {

        }
        if (error.response && error.response.status === 401) {

            // refresh()
        }
        return Promise.reject(error);
    }
);





export {
    $host,
    $authHost
}