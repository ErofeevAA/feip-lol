import {Image} from "react-bootstrap";
import React from "react";
import {SYMBOL_RUBLE} from "../utils/consts/StringConsts";
import close_img from "../assets/ci_close-big.png";

const BasketItem = ({name, size, image, count, sum, onClickDel, onClickMinus, onClickPlus}) => {

  return (
      <div className="d-flex flex-wrap">
          <div className="d-flex flex-wrap">
              <Image
                  src={image}
                  width="145"
                  height="145"
                  className="d-inline-block mx-1"
              />
              <div style={{width:32, height: 10}}></div>
              <div className="d-flex flex-column align-items-start">
                  <div style={{color: '#323540', fontSize: 18}}>{name}</div>
                  <div className="d-flex align-items-end">
                      <div style={{color: '#616575', fontSize: 12}}>Размер:</div>
                      <div style={{width: 8}}/>
                      <div style={{color: '#515562', fontSize: 14}}>{size}</div>
                  </div>
                  <div style={{height: 24}}></div>
                  <div className="d-flex">
                      <div className="d-flex flex-column">
                          <div style={{color: '#616575', fontSize: 12}}>Количество:</div>
                          <div style={{background: '#FFF', border: '0.5px solid #CDCFD6'}}>
                              <div className="d-flex block_quantity justify-content-around">
                                  <div style={{color: '#ADB1BB', fontSize: '14', cursor: 'pointer'}} onClick={onClickMinus}>-</div>
                                  <div style={{color: '#515562', fontSize: '14'}}>{count}</div>
                                  <div style={{color: '#ADB1BB', fontSize: '14', cursor: 'pointer'}} onClick={onClickPlus}>+</div>
                              </div>
                          </div>
                      </div>
                      <div style={{width: 32}}/>
                      <div className="d-flex flex-column">
                          <div style={{color: '#616575', fontSize: 12}}>Стоимость:</div>
                          <div style={{color: '#515562', fontSize: 14}}>{sum} {SYMBOL_RUBLE}</div>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{width: 24}}/>
          <Image
              src={close_img}
              width="24"
              height="24"
              style={{cursor: 'pointer'}}
              onClick={onClickDel}
          />
      </div>
  );
}

export default BasketItem;