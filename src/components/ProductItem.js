import React, {useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts/RoutesConst";
import {SYMBOL_RUBLE} from "../utils/consts/StringConsts";
import basket_img from "../assets/basket.svg";

const ProductItem = () => {
    const navigate = useNavigate()
    const [over, overState] = useState(false)

    function itemClick(_) {
        navigate(PRODUCT_ROUTE + `/id`)
    }
    let itemStyle = {zIndex: 0}
    let content = (
        <div className="d-flex flex-column">
            <div onClick={itemClick} style={{backgroundImage: basket_img/*`url${product.picture}`*/, width: 288, height: 407}}></div>
            <div style={{height: 16}}/>
            <div onClick={itemClick} style={{color: "#515562", fontSize: 16}}>Water-repellent wool twill trench coat</div>
            <div style={{height: 24}}/>
            <div style={{color: "#515562", fontSize: 18, fontWeight: 700}}>17 200 {SYMBOL_RUBLE}</div>
        </div>
    );
    if (over) {
        itemStyle = {boxShadow: `0px 0px 20px -4px rgba(0, 0, 0, 0.2)`, zIndex:1}
        content = (
            <div className="d-flex flex-column" style={{margin: 16}}>
                <div
                    onClick={itemClick}
                    style={{cursor: 'pointer', backgroundImage: basket_img/*`url${product.picture}`*/, width: 288, height: 407}}></div>
                <div style={{height: 16}}/>
                <div
                    onClick={itemClick}
                    style={{color: "#515562", fontSize: 16, cursor: 'pointer'}}
                >Water-repellent wool twill trench coat</div>
                <div style={{height: 24}}/>
                <div style={{color: "#515562", fontSize: 18, fontWeight: 700}}>17 200 {SYMBOL_RUBLE}</div>
                <div className="d-flex">
                    <div style={{color: "#616575", fontSize: 14}}>Выберите размер: </div>
                    <div></div>
                </div>
                <Button variant={'secondary'}>В корзину</Button>
            </div>
        )
    }

    return (
        <div
            onMouseOver={() => overState(true)}
            onMouseOut={() => overState(false)}
            style={itemStyle}
        >
            {content}
        </div>
    );
};

export default ProductItem;