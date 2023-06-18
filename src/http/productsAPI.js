import {$authHost, $host} from "./index";


export const getProducts = async () => {
    const {data} = await $host.get('products')
    return data
}