import {gCookies} from "../index";
import {COOKIES_BASKET} from "../utils/consts/CookiesConst";
import BasketItem from "../components/BasketItem";
import {useState} from "react";
import React from "react";
import BasketItemStore from "../store/BasketItemStore";
import basket_img from "../assets/basket.svg";
import PlaceOrder from "../components/PlaceOrder";

const arr = [
    new BasketItemStore(
        'Жакет Weekend Max Mara ONDINA',
        'S',
        1,
        2700,
        basket_img
    ),
    new BasketItemStore(
        'Жакет Weekend Max Mara ONDINA',
        'S',
        1,
        2700,
        basket_img
    ),
    new BasketItemStore(
        'Жакет Weekend Max Mara ONDINA',
        'S',
        1,
        2700,
        basket_img
    )
]

const BasketPage = () => {
    // const [items, setItems] = useState();

    const items = arr.map((item) => {return <BasketItem item={item}/>})

    return (
        <div className="d-flex justify-content-center flex-wrap"
             style={{background: "#F7F7FC", paddingTop: 32, margin: `0 32px 0 32px`}}>
            <div className="d-flex flex-column">
                {items}
            </div>
            <div style={{width: 100}}></div>
            <PlaceOrder/>
        </div>
    );
}

export default BasketPage;