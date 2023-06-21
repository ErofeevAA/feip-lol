
import React, {useContext, useState} from "react";
import {Image} from "react-bootstrap";
import {Context} from "../index";

const DetailProductPage = () => {
    const {detailProduct} = useContext(Context)
    const product = detailProduct.product;
    const name = product.name
    const description = product.description;

    const [numChosen, numChosenState] = useState(0)
    const [numChosenColor, numChosenColorState] = useState(0)

    let sizeWidget = [];
    const variation = product.productVariations;
    const keysVariation = Object.keys(variation);
    let img;
    let chosenColor = Object.keys(variation[keysVariation[numChosen]])[numChosenColor];
    let price = variation[keysVariation[numChosen]][chosenColor].price;

    let variantColors = [];

    for (let i = 0; i < product.images.length; ++i) {
        if (product.images[i].color.name === chosenColor) {
            img = product.images[i].url;
            console.log(img);
        }
    }

    for (let i = 0; i < keysVariation.length; ++i) {
        function choose(_) {
            numChosenState(i)
        }
        sizeWidget.push(<SizeItem size={keysVariation[i]} onClick={choose} chosen={i === numChosen}/>);
    }
    let colorsWidget = [];

    for (let i = 0; i < Object.keys(variation[keysVariation[numChosen]]).length; ++i) {
        const curCol = Object.keys(variation[keysVariation[numChosen]])[i];
        function choose(_) {
            numChosenColorState(i)
        }
        colorsWidget.push(<ColorItem color={curCol.hex} onClick={choose} chosen={i === numChosenColor}/>);
    }

    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap"
             style={{margin: 32}}>
            <Image
            //src={}
            width='464'
            height='612'
            />
            <div style={{width: 40}}/>
            <div className="d-flex flex-column align-items-start" style={{maxWidth: 408}}>
                <div style={{color: '#323540', fontSize: 24, fontWeight: 700}}>
                    {name}
                </div>
                <div style={{color: '#616575', fontSize: 16, maxWidth: 408}}>
                    {description}
                </div>
                <div style={{height: 24}}/>
                <div style={{color: '#323540', }}>Размер:</div>
                <div style={{height: 12}}/>
                <div className="d-flex align-items-center">
                    {sizeWidget}
                </div>
                <div style={{height: 24}}/>
                <div style={{color: '#323540', }}>Цвет:</div>
                <div style={{height: 12}}/>
                <div className="d-flex align-items-center">
                    {colorsWidget}
                </div>

            </div>
        </div>
    );
}

const SizeItem = ({size, onClick, chosen}) => {
    const back = chosen ? '#9599a8' : '#CDCFD6';
    const textColor = chosen ? '#f6f6f7' : '#26282f';
    return (
        <div
            onClick={onClick}
            className="d-flex justify-content-center align-items-center"
            style={{margin: 4, cursor: 'pointer', width: 30, height: 30, background: `${back}`, color:`${textColor}`}}
        >
            {size}
        </div>
    );
}

const ColorItem = ({color, onClick, chosen}) => {
    const borderColor = '#000';
    const borderWidth = chosen ? 2 : 0;
    return (
        <div
            onClick={onClick}
            className="d-flex justify-content-center align-items-center"
            style={{
                margin: 4,
                cursor: 'pointer',
                width: 30,
                height: 30,
                background: `${color}`,
                border: `${borderWidth}px solid`,
                borderRadius: 30,
                borderColor: `${borderColor}`
            }}
        />
    );
}

export default DetailProductPage;