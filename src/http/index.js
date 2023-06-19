import axios from "axios";

const url = 'http://localhost:8080/'

const $host = axios.create({
    baseURL: url
})

const $authHost = axios.create({
    baseURL: url
})

const refreshTokens = async () => {
    try {
        const {data} = await $authHost.post(
            'auth/refresh',
            {'refreshToken': localStorage.getItem('refreshToken')}
        )
        const accessToken = data['accessToken']

        localStorage.setItem('accessToken', data["accessToken"])
        localStorage.setItem('refreshToken', data["refreshToken"])

        return accessToken;
    } catch (error) {
        // Обработка ошибки обновления токенов
        console.error('Ошибка обновления токенов:', error);
        throw error;
    }
};

$authHost.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    try {
        return await config;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            try {
                const newAccessToken = await refreshTokens();
                config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return await config;
            } catch (error) {
                console.error('Ошибка обновления токенов:', error);
                throw error;
            }
        } else {
            console.error('Ошибка запроса:', error);
            throw error;
        }
    }
});






export {
    $host,
    $authHost
}