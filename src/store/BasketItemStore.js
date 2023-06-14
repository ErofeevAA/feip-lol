export default class BasketItemStore {
    /**
     * @param {String} name
     * @param {String} size
     * @param {int} quantity
     * @param {number} price
     * @param {any} picture
     * */
    constructor(name, size, quantity, price, picture) {
        this._name = name
        this._size = size
        this._quantity = quantity
        this._price = price
        this._picture = picture
    }

    get sum() {
        return this._quantity * this._price
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }
    get quantity() {
        return this._quantity;
    }
    get size() {
        return this._size;
    }

    get picture() {
        return this._picture;
    }

    quantityPlus() {
        this._quantity += 1
        return this._quantity
    }

    quantityMinus() {
        if (this._quantity > 0) {
            this._quantity -= 1
            return this._quantity
        }
    }
}
