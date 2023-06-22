import {SYMBOL_RUBLE} from "../utils/consts/StringConsts";
import React from "react";
import {Button} from "react-bootstrap";

const PlaceOrder = ({onClick, sum, count, buttonText}) => {
    return(
        <div className="d-flex flex-column"
             style={{width: 207, height: 235, background: "#ffffff", paddingTop: 32}}>
            <div style={{paddingLeft: 16, paddingRight: 16}}>
                <div style={{color: "#515562", fontSize: 16}}>Ваша корзина</div>
                <div style={{marginTop: 16, background:"#CDCFD6", height: 1}}/>
                <div className="d-flex justify-content-between" style={{marginTop: 16, fontSize: 12}}>
                    <div style={{color: "#616575"}}>Кол-во товаров:</div>
                    <div style={{color: "#323540"}}>{count} шт</div>
                </div>
                <div className="d-flex justify-content-between" style={{marginTop: 7, fontSize: 12}}>
                    <div style={{color: "#616575"}}>Сумма:</div>
                    <div style={{color: "#323540"}}>{sum} {SYMBOL_RUBLE}</div>
                </div>
                <div style={{marginTop: 16, background:"#CDCFD6", height: 1}}/>
            </div>
            <div className="d-flex justify-content-between" style={{ margin: `24px 16px 24px 20px`,
                 fontSize: 14, fontWeight: 700, color: "#323540"
            }}>
                <div>Итого:</div>
                <div>{sum} {SYMBOL_RUBLE}</div>
            </div>
            <Button variant={'secondary'} onClick={onClick}>
                {buttonText}
            </Button>
        </div>
    );
}

export default PlaceOrder;