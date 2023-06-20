import {makeAutoObservable} from "mobx";

class CategoriesStore {

    constructor() {
        this._categories = []
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    get categories() {
        return this._categories
    }
}

export default CategoriesStore;