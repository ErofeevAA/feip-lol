import {$host} from "./index";

export const putProductInCart = async (uuid, sku, count) => {
    const {data} = await $host.put(`/cart/${uuid}`, {'sku': sku, 'count': count});
    return data;
}

export const getProductInCart = async (uuid) => {
    try {
        const {data} = await $host.get(`/cart/${uuid}`);
        return data;
    } catch (e) {
        return null;
    }
}

export const delProduct = async (uuid, sku) => {
    const {data} = await $host.delete(`/cart/${uuid}/${sku}`);
    return data
}