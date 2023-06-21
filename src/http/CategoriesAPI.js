import {$authHost, $host} from "./index";


export const getCategories = async () => {
    const {data} = await $host.get('categories')
    return data
}



/// TODO Картинки крутим при создании??
export const postParentCategory = async (name) => {
    const {data} = await $authHost.post('/categories', {"name": name})
    return data
}

export const postChildrenCategory = async (parentCategoryId, name) => {
    const {data} = await $authHost.post(`/categories/${parentCategoryId}`, {"name": name})
    return data
}