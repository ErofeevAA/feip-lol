import {$authHost, $host} from "./index";


export const getCategories = async () => {
    const {data} = await $host.get('categories')
    return data
}
