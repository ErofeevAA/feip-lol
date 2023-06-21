import {$authHost, $host} from "./index";


export const getProducts = async () => {
    const {data} = await $host.get('products')
    return data
}

export const getProductsByCategory = async (id) => {
    const {data} = await $host.get(`products?filters%5Bcategory%5D=${id}`)
    return data
}

export const getProductById = async  (id) => {
    const {data} = await $host.get(`products/${id}`);
    return data;
}

export  const getProductsByName = async (name) => {
    const {data} = await $host.get(`products?filters%5Bname%5D=${name}`)
    return data
}