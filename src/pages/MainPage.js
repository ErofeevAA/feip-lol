import React from 'react';
import Container from "react-bootstrap/Container";
import mainImage from '../assets/img.png'
import smallMock from '../assets/small_category_mock.png'
import largeMock from '../assets/large_category_mock.png'
import aboutImg from '../assets/aboutImg.png'
import costumesCategory from '../assets/costumes_category.jpg'
import leatherCategory from '../assets/leather.jpg'
import jacketCategory from '../assets/jacket.jpg'
import rubushkaCategory from '../assets/rubushka.jpg'
import topCategory from '../assets/top.jpg'
import jeansCategory from '../assets/jeans.jpg'
import winterJacket from '../assets/winterJacket.jpeg'
import tolstovka from '../assets/tolstovka.jpg'
import instaMock from '../assets/intagram_mock.png'
import {Button, Image} from "react-bootstrap";

import './MainPage.css'
import SmallMockCategory from "../components/SmallMockCategory";
import LargeMockCategory from "../components/LargeMockCategory";
import MainMock from "../components/MainMock";
import Row from "react-bootstrap/Row";

const MainPage = () => {
    return (
        <div style={{marginTop: "64px", marginBottom: "96px"}}>
            <Container>
                <div className="d-flex justify-content-center" style={{marginBottom: "96px"}}>
                    {/*<MainMock title="дыфвфы" img={mainImage}/>*/}
                    <Image className='w-100' src={mainImage}/>
                </div>
                <div className="d-flex justify-content-between">
                    <SmallMockCategory title='Костюмы' img={costumesCategory}/>
                    <SmallMockCategory title='Куртки' img={leatherCategory}/>
                    <SmallMockCategory title='Плащи' img={jacketCategory}/>
                    {/*<Image width="30%" src={smallMock}/>*/}
                </div>
                <div className="d-flex justify-content-between" style={{marginTop: "3%", marginBottom: "3%"}}>
                    <LargeMockCategory title="Утепленные куртки" img={winterJacket}/>
                    <LargeMockCategory title="Толстовки" img={tolstovka}/>
                </div>
                <div className="d-flex justify-content-between">
                    <SmallMockCategory title='Топы' img={topCategory}/>
                    <SmallMockCategory title='Рубашки' img={rubushkaCategory}/>
                    <SmallMockCategory title='Джинсы' img={jeansCategory}/>
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


                <div className="d-flex flex-column align-items-center" style={{marginTop: "96px"}}>
                    <h2 className="text-uppercase">Мы в инстаграм</h2>
                    <div className="d-flex justify-content-between mt-5">
                       <Image style={{width: "20%"}} src={instaMock}/>
                       <Image style={{width: "20%"}} src={instaMock}/>
                       <Image style={{width: "20%"}} src={instaMock}/>
                       <Image style={{width: "20%"}} src={instaMock}/>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MainPage;