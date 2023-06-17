import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts/RoutesConst";
import {SYMBOL_RUBLE} from "../utils/consts/StringConsts";
import basket_img from "../assets/basket.svg";

const ProductItem = () => {
    const navigate = useNavigate()
    const [over, overState] = useState(false)

    const [numChosen, numChosenState] = useState(undefined)

    let sizeWidget = [];
    const mock = ['XS', 'S', 'M'];

    for (let i = 0; i < mock.length; ++i) {
        function choose(_) {
            numChosenState(i)
        }
        sizeWidget.push(<SizeItem size={mock[i]} onClick={choose} chosen={i === numChosen}/>);
    }

    const name = 'Water-repellent wool twill trench coat';

    const price = 17200;

    function itemClick(_) {
        navigate(PRODUCT_ROUTE + `/id`)
    }
    let itemStyle = {zIndex: 0}
    let content = (
        <div className="d-flex flex-column p-3" style={{marginBottom: 95}}>
            <div onClick={itemClick} style={{backgroundImage: `url(${basket_img})`, width: 288, height: 407}}/>
            <div style={{height: 16}}/>
            <div onClick={itemClick} style={{color: "#515562", fontSize: 16}}>{name}</div>
            <div style={{height: 24}}/>
            <div style={{color: "#515562", fontSize: 18, fontWeight: 700}}>{price} {SYMBOL_RUBLE}</div>
        </div>
    );

    if (over) {
        // itemStyle = {boxShadow: `0px 0px 20px -4px rgba(0, 0, 0, 0.2)`, zIndex:1}
        content = (
            <div className="d-flex flex-column p-3"
                 style={{
                     boxShadow: `0px 0px 20px -4px rgba(0, 0, 0, 0.2)`, background: '#fff'}}>
                <div
                    onClick={itemClick}
                    style={{cursor: 'pointer', backgroundImage: `url(${basket_img})`, width: 288, height: 407}}></div>
                <div style={{height: 16}}/>
                <div
                    onClick={itemClick}
                    style={{color: "#515562", fontSize: 16, cursor: 'pointer'}}
                >{name}</div>
                <div style={{height: 24}}/>
                <div style={{color: "#515562", fontSize: 18, fontWeight: 700}}>{price} {SYMBOL_RUBLE}</div>
                <div style={{height: 10}}/>
                <div className="d-flex align-items-center">
                    <div style={{color: "#616575", fontSize: 14}}>Выберите размер: </div>
                    <div style={{width: 12}}/>
                    {sizeWidget}
                </div>
                <div style={{height: 10}}/>
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

const SizeItem = ({size, onClick, chosen}) => {
    const back = chosen ? '#9599a8' : '#CDCFD6';
    const textColor = chosen ? '#f6f6f7' : '#26282f';
    return (
        <div
            onClick={onClick}
            className="d-flex justify-content-center"
            style={{margin: 4, cursor: 'pointer', width: 24, height: 24, background: `${back}`, color:`${textColor}`}}
        >
            {size}
        </div>
    );
}

export default ProductItem;