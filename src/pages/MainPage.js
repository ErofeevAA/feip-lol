import React from 'react';
import Container from "react-bootstrap/Container";
import mainImage from '../assets/img.png'
import smallMock from '../assets/small_category_mock.png'
import largeMock from '../assets/large_category_mock.png'
import aboutImg from '../assets/aboutImg.png'
import {Button, Image} from "react-bootstrap";

import './MainPage.css'

const MainPage = () => {
    return (
        <div style={{marginTop: "64px", marginBottom: "96px"}}>
            <Container>
                <div className="d-flex justify-content-center" style={{marginBottom: "96px"}}>
                    <Image width="100%" src={mainImage}/>
                </div>
                <div className="d-flex justify-content-between">
                    <Image width="30%" src={smallMock}/>
                    <Image width="30%" src={smallMock}/>
                    <Image width="30%" src={smallMock}/>
                </div>
                <div className="d-flex justify-content-between" style={{marginTop: "3%", marginBottom: "3%"}}>
                    <Image width="45%" src={largeMock}/>
                    <Image width="45%" src={largeMock}/>
                </div>
                <div className="d-flex justify-content-between">
                    <Image width="30%" src={smallMock}/>
                    <Image width="30%" src={smallMock}/>
                    <Image width="30%" src={smallMock}/>
                </div>



                <div style={{marginTop: "96px", width: "100%"}} className="border border-1 border-secondary">
                    <div
                        style={{
                            backgroundImage: `url(${aboutImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '400px',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: 'white',
                            }}
                        >
                            <h1 className="text-dark">О компании</h1>
                            <p className="text-secondary">Меня зовут Имя Фамилия.
                                Я заказываю одежду Бренд из Страна
                                с персональной скидкой и подбираю для Вас
                                интересные варианты сумок,
                                одежды и обуви в шоуруме.</p>
                            <Button className="btn-lg btn-secondary">Подробнее</Button>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MainPage;