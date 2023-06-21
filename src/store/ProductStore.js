class ProductStore {
    constructor(id, name) {
        this._product = {}
    }

    setProduct(product) {
        this._product = product
    }

    get product() {
        return this._product
    }
}

export default ProductStore;