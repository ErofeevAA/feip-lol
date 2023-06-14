import {Image} from "react-bootstrap";
import basket_img from "../assets/basket.svg";
import {NavLink} from "react-router-dom";
import React from "react";
import {BASKET_ROUTE} from "../utils/consts/RoutesConst";
import {COOKIES_BASKET} from "../utils/consts/CookiesConst";
import {gCookies} from "../index";

const Basket = () => {
    let basket  = gCookies.get(COOKIES_BASKET);
    if (basket !== undefined) {
        console.log(basket)
        // return (<div>что-то есть</div>);
    }

    return(
        <NavLink to={BASKET_ROUTE} className='mx-3 d-flex align-items-center' style={{color: "grey"}}>
            <Image
                src={basket_img}
                width="24"
                height="22.3"
                className="d-inline-block mx-1"
                alt="Корзина"
            />
            Корзина
        </NavLink>
    );
}

const Test = (name, value, [options]) => {
    console.log(name);
    let a = name === undefined ? 'aaa': 'a';
    return <div>{a}</div>
}

export default Basket;