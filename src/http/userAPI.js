import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import {LOGIN_ROUTE} from "../utils/consts/RoutesConst";

/// TODO Регистрацию надо переписать
export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {'phone': email, 'password': password})
    localStorage.setItem('accessToken', data["accessToken"])
    localStorage.setItem('refreshToken', data["refreshToken"])
    return jwt_decode(data["accessToken"])
}

export const refresh = async () => {
    try {
        const {data} = await $authHost.post('auth/refresh', {'refreshToken': localStorage.getItem('refreshToken')})
        localStorage.setItem('accessToken', data["accessToken"])
        localStorage.setItem('refreshToken', data["refreshToken"])
        return jwt_decode(data["accessToken"])
    } catch (e) {
        if (e.response.statusCode === 401) {
            window.location.href = LOGIN_ROUTE
        }
    }

}

