class ProductStore {

    constructor(id, name) {
        this._products = []
    }

    setProducts(products) {
        this._products = products
    }

    get products() {
        return this._products
    }
}

export default ProductStore;