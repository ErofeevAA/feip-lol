import {$host} from "./index";

export const createOrder = async (uuid, name, email, city, street) => {
    const {data} = await $host.post(`/orders}`, {
        'name': name,
        'email': email,
        'receiveType': 'PICKUP',
        'address': {
            'city': city,
            'street': street
        },
        'cartUuid': uuid
    });
    return data;
}