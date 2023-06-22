import BasketItem from "../components/BasketItem";
import React, {useContext, useState} from "react";
import PlaceOrder from "../components/PlaceOrder";
import InputFormWithTitle from "../components/InputFormWithTitle";
import {delProduct, getProductInCart, putProductInCart} from "../http/cartAPI";
import {generateUuid} from "../utils/GenerateUuid";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {LOGIN_ROUTE} from "../utils/consts/RoutesConst";

const BasketPageState = {
    stateListProducts: 'Офомить заказ',
    stateOffer: 'Отправить заявку',
    stateSuccess: 'Заявка отправлена'
}

const BasketPage = () => {
    const navigator = useNavigate()
    const [cart, setCart] = useState();
    const [pageState, setPageState] = useState(BasketPageState.stateListProducts);
    const [fields, setFields] = useState({
        '': undefined,
    })
    const {user} = useContext(Context)

    let uuid = localStorage.getItem('uuid');
    if (uuid === null) {
        uuid = generateUuid();
        localStorage.setItem('uuid', uuid);
    }
    getProductInCart(uuid).then(data => {
        if(data !== null && cart === undefined) {
            setCart(data)
            return;
        }
        if (data !== null && cart.productsCount !== data.productsCount)
            setCart(data)
    });

    if (cart === undefined || cart.products.length === 0) {
        return ( <div className="d-flex justify-content-center align-items-center"
                      style={{background: "#F7F7FC", paddingTop: 32, paddingBottom: 32, margin: 32}}>
            Товаров в корзине нет.
        </div>);
    }

    let items = []

    for (let i = 0; i < cart.products.length; ++i) {
        const item = cart.products[i]
        const sku  = item.product.sku;
        let itemCount = item.count;
        function onClickDel(_) {
            delProduct(uuid, sku).then(
                data => {
                    setCart(data)
                }
            );
        }

        function onClickPlus(_) {
            putProductInCart(uuid, `${sku}`, `${itemCount + 1}`).then(
                data => {
                    setCart(data)
                }
            );
        }

        function onClickMinus(_) {
            if (itemCount === 1) {
                delProduct(uuid, sku).then(
                    data => {
                        setCart(data)
                    }
                );
                return;
            }
            putProductInCart(uuid, `${sku}`, `${itemCount - 1}`).then(
                data => {
                    setCart(data)
                }
            );
        }

        items.push(
            <BasketItem
                name={item.product.name}
                size={item.product.size}
                count={itemCount}
                sum={item.product.price * item.count}
                image={`http://localhost:8080${item.product.images[0].url}`}
                onClickMinus={onClickMinus}
                onClickPlus={onClickPlus}
                onClickDel={onClickDel}
            />
        );
        items.push(<div style={{height: 1, background: '#CDCFD6', marginTop: 20, marginBottom: 20}}/>)
    }
    items.pop()

    function onClickBeginOffer(_) {
        if (!user.isAuth) {
            navigator(LOGIN_ROUTE)
            return;
        }

        if (pageState === BasketPageState.stateListProducts) {
            setPageState(BasketPageState.stateOffer)
        } else if(pageState === BasketPageState.stateOffer) {

        } else {

        }
    }

    return (
        <div className="d-flex justify-content-center flex-wrap"
             style={{background: "#F7F7FC", paddingTop: 32, paddingBottom: 32, margin: 32}}>
            {pageState === BasketPageState.stateListProducts && <BasketBlockItems items={items}/>}
            {pageState === BasketPageState.stateOffer && <MakeOrder items={items}/>}
            {pageState === BasketPageState.stateSuccess && <SuccessBlock/>}
            <div style={{width: 100}}></div>
            <PlaceOrder onClick={onClickBeginOffer} sum={cart.orderSum} buttonText={pageState} count={cart.productsCount}/>
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

const SuccessBlock = () => {
    return (
        <div className="d-flex justify-content-center align-items-center"
             style={{background: "#F7F7FC", paddingTop: 32, paddingBottom: 32, margin: 32}}>
            Заявка успешно отправлена!
        </div>
    );
}

export default BasketPage;