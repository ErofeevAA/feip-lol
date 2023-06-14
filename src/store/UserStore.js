import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._user = undefined
        makeAutoObservable(this)
    }
    setUser(user) {
        this._user = user
    }

    delUser() {
        this._user = undefined
    }

    get isAuth() {
        return this._user !== undefined
    }

    get isNotAuth() {
        return this._user === undefined
    }
    get user() {
        return this._user
    }
}