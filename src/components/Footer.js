import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, Container, Image, Nav, NavbarBrand, Dropdown} from "react-bootstrap";
import {CATALOG_ROUTE, SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {NavLink} from "react-router-dom";

import logoLight from '../assets/logo_light.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import vk from '../assets/vk.svg'
import youtube from '../assets/youtube.svg'
import avito from '../assets/avito.svg'
import feipLogo from '../assets/feip_logo.svg'

const Footer = () => {
    return (
        <div className='mt-auto bg-dark' style={{paddingTop: 24, paddingBottom: 24}}>
            <Container className='d-flex justify-content-center flex-column flex-wrap' >
                <Row className="mt-2 h-50 mb-5 align-items-start">
                    <Col md={3} className='d-flex flex-column justify-content-around align-items-start'>
                        <NavLink to={SHOP_ROUTE}>
                            <Image src={logoLight}/>
                        </NavLink>
                        <Button className='mt-3' variant={'secondary'}>
                            Связаться с нами
                        </Button>
                        <Nav className="d-flex flex-column">
                            <NavLink className='mt-3' to='/' style={{color: "grey", fontSize: 12}}>
                                Политика конфинденциальности
                            </NavLink>
                            <NavLink className='mt-3' to='/' style={{color: "grey", fontSize: 12}}>
                                Пользовательское соглашение
                            </NavLink>
                        </Nav>
                    </Col>
                    <Col className='d-flex flex-column justify-content-around align-items-start'>
                        <NavbarBrand className='text-light' style={{fontSize: 12}}>
                            КАТАЛОГ
                        </NavbarBrand>
                        <Nav className='d-flex flex-column mt-3 align-items-start'>
                            <NavLink to={CATALOG_ROUTE} style={{color: "grey"}}>Одежда</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Обувь</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Верхняя одежда</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Домашняя одежда</NavLink>
                        </Nav>
                    </Col>
                    <Col md={2} className='d-flex flex-column justify-content-around align-items-start'>
                        <NavbarBrand className='text-light' style={{fontSize: 12}}>
                            О КОМПАНИИ
                        </NavbarBrand>
                        <Nav className='d-flex flex-column mt-3 align-items-start'>
                            <NavLink to='/' style={{color: "grey"}}>О нас</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Контакты</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Доставка</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>Оплата</NavLink>
                        </Nav>
                    </Col>
                    <Col md={3} className='d-flex flex-column justify-content-around align-items-start'>
                        <NavbarBrand className='text-light' style={{fontSize: 12}}>
                            КОНТАКТЫ
                        </NavbarBrand>
                        <Nav className='d-flex flex-column mt-3 align-items-start'>
                            <NavLink to='/' style={{color: "white", fontSize: 14}}>+7 (900) 900-90-90</NavLink>
                            <NavLink to='/' style={{color: "grey"}}>sail@mail.com</NavLink>
                        </Nav>
                        <Nav className='d-flex justify-content-between w-75 mt-3'>
                            <NavLink to='/'>
                                <Image
                                    src={telegram}
                                    width={16}
                                    height={16}
                                />
                            </NavLink>
                            <NavLink to='/'>
                                <Image
                                    src={instagram}
                                    width={16}
                                    height={16}
                                />
                            </NavLink>
                            <NavLink to='/'>
                                <Image
                                    src={vk}
                                    width={16}
                                    height={16}
                                />
                            </NavLink>
                            <NavLink to='/'>
                                <Image
                                    src={youtube}
                                    width={16}
                                    height={10.67}
                                />
                            </NavLink>
                            <NavLink to='/'>
                                <Image
                                    src={avito}
                                    width={56.54}
                                    height={16}
                                />
                            </NavLink>
                        </Nav>
                    </Col>
                </Row>
                <Dropdown.Divider style={{background: 'gray', height:1}}/>
                <Container className='mt-2'>
                    <div className='d-flex justify-content-between align-items-end'>
                        <div style={{color: "grey", fontSize: 12}}>© logo, 2023</div>
                        <div className='d-flex align-items-center' style={{color: "grey", fontSize: 12}}>
                            Developed by
                            <div className='mx-2'></div>
                            <Image src={feipLogo}/>
                        </div>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default Footer;