import BasketItem from "../components/BasketItem";
import React from "react";
import BasketItemStore from "../store/BasketItemStore";
import basket_img from "../assets/basket.svg";
import PlaceOrder from "../components/PlaceOrder";
import InputFormWithTitle from "../components/InputFormWithTitle";

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

    let items = []

    for (let i = 0; i < arr.length; ++i) {
        items.push(<BasketItem item={arr[i]}/>);
        items.push(<div style={{height: 1, background: '#CDCFD6', marginTop: 20, marginBottom: 20}}/>)
    }
    items.pop()

    return (
        <div className="d-flex justify-content-center flex-wrap"
             style={{background: "#F7F7FC", paddingTop: 32, paddingBottom: 32, margin: 32}}>
            <BasketBlockItems items={items}/>
            <div style={{width: 100}}></div>
            <PlaceOrder/>
        </div>
    );
}

const BasketBlockItems = ({items}) => {
    return (
        <div className="d-flex flex-column">
            {items}
        </div>
    );
}

const MakeOrder = () => {

    return (
        <div className="d-flex flex-column align-items-start">
            <InputFormWithTitle title="Имя"/>
            <div style={{height: 32}}/>
            <InputFormWithTitle title="Телефон*"/>
            <div style={{height: 32}}/>
            <InputFormWithTitle title="Email" type="email"/>
            <div style={{height: 32}}/>
            <div className="d-flex ">
                <InputFormWithTitle title="Почтовый индекс"/>
                <div style={{width: 16}}/>
                <InputFormWithTitle title="Населённый пункт"/>
            </div>
        </div>
    );
}

export default BasketPage;