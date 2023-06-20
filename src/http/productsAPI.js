import {$authHost, $host} from "./index";


export const getProducts = async () => {
    const {data} = await $host.get('products')
    return data
}

export const getProductsByCategory = async (id) => {
    const {data} = await $host.get(`products?filters%5Bcategory%5D=${id}`)
    return data
}