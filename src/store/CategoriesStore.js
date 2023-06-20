class CategoriesStore {

    constructor() {
        this._categories = []
    }

    setCategories(categories) {
        this._categories = categories
    }

    get categories() {
        return this._categories
    }
}

export default CategoriesStore;