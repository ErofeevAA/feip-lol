import React, {useContext, useState} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {Button, Dropdown, Image, NavbarBrand} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
// import {useNavigate} from 'react-router-dom'

import logo from '../assets/logo.svg'
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'
import favourite from '../assets/favourite.svg'
import userIcon from '../assets/user.svg'
import basket from '../assets/basket.svg'
import Basket from "./Basket";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    // const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logOut = () => {
        user.delUser()
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{height: '40px'}}>
                <Container>
                    <Nav>
                        <Nav.Link href="#home">Контакты</Nav.Link>
                        <Nav.Link href="#features">О нас</Nav.Link>
                        <Nav.Link href="#pricing">Доставка</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">
                            <img
                                src={instagram}
                                width="12"
                                height="12"
                                className="d-inline-block mx-1"
                                alt="instagram"
                            />
                            logo
                        </Nav.Link>
                        <Nav.Link href="/">
                            <img
                                src={whatsapp}
                                width="12"
                                height="12"
                                className="d-inline-block mx-1"
                                alt="instagram"
                            />
                            Написать нам
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar style={{height: '96px'}}>
                <Container>
                    <div className="d-flex align-items-center">
                        <NavLink to={SHOP_ROUTE}>
                            <Image src={logo}/>
                        </NavLink>

                        <div>
                            <Button className="btn-secondary mx-5" onClick={toggleMenu}>
                                Каталог
                            </Button>
                            {isOpen && (
                                <div
                                    className="burger-menu py-5 d-flex align-items-center border border-secondary"
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: "100%",
                                        width: "100%",
                                        backgroundColor: "white"
                                    }}
                                >
                                    <Container>
                                        <Row >
                                            <Col className='d-flex flex-column justify-content-around align-items-start'>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Одежда
                                                </NavbarBrand>
                                                <Nav className='d-flex flex-column mt-3 align-items-start'>
                                                    <NavLink to={PRODUCT_ROUTE} style={{color: "grey"}}>Юбки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джемперы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джинсы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Брюки, шорты</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Футболки, топы, лонгсливы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Блузки, рубашки, туники</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Платья</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Толстовки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Костюмы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Оверол</NavLink>
                                                </Nav>
                                            </Col>
                                            <Col className='d-flex flex-column justify-content-around align-items-start'>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Верхняя одежда
                                                </NavbarBrand>
                                                <Nav className='d-flex flex-column mt-3 align-items-start'>
                                                    <NavLink to={PRODUCT_ROUTE} style={{color: "grey"}}>Юбки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джемперы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джинсы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Брюки, шорты</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Футболки, топы, лонгсливы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Блузки, рубашки, туники</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Платья</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Толстовки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Костюмы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Оверол</NavLink>
                                                </Nav>
                                            </Col>
                                            <Col className='d-flex flex-column justify-content-around align-items-start'>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Аксессуары
                                                </NavbarBrand>
                                                <Nav className='d-flex flex-column mt-3 align-items-start'>
                                                    <NavLink to={PRODUCT_ROUTE} style={{color: "grey"}}>Юбки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джемперы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Джинсы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Брюки, шорты</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Футболки, топы, лонгсливы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Блузки, рубашки, туники</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Платья</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Толстовки</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Костюмы</NavLink>
                                                    <NavLink to='/' style={{color: "grey"}}>Оверол</NavLink>
                                                </Nav>
                                            </Col>
                                            <Col className='d-flex flex-column justify-content-around align-items-start'>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Жакеты и пиджаки
                                                </NavbarBrand>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Обувь
                                                </NavbarBrand>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Сумки и кошельки
                                                </NavbarBrand>
                                                <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                                                    Шапки, шляпы, шарфы
                                                </NavbarBrand>
                                            </Col>
                                        </Row>

                                    </Container>
                                </div>
                            )}
                        </div>

                    </div>



                    {user.isAuth ?
                        <Nav className="ml-auto d-flex align-items-center" style={{color: 'white'}}>
                            <NavLink to='/' className='d-flex align-items-center' style={{color: "grey"}}>
                                <Image
                                    src={favourite}
                                    width="24"
                                    height="22.3"
                                    className="d-inline-block mx-1"
                                    alt="instagram"
                                />
                                Избранное
                            </NavLink>
                            <NavLink to={ADMIN_ROUTE} className='mx-3 d-flex align-items-center' style={{color: "grey"}}>
                                <Image
                                    src={userIcon}
                                    width="24"
                                    height="22.3"
                                    className="d-inline-block mx-1"
                                    alt="instagram"
                                />
                                Админ панель
                            </NavLink>
                            <NavLink to='/' className='d-flex align-items-center' style={{color: "grey"}}>
                                <Image
                                    src={basket}
                                    width="24"
                                    height="22.3"
                                    className="d-inline-block mx-1"
                                    alt="instagram"
                                />
                                Корзина
                            </NavLink>
                            <Button
                                variant={"danger"}
                                onClick={() => logOut()}
                                className="ml-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <NavLink to={LOGIN_ROUTE} className='d-flex align-items-center' style={{color: "grey"}}>
                                <Image
                                    src={userIcon}
                                    width="24"
                                    height="22.3"
                                    className="d-inline-block mx-1"
                                    alt="instagram"
                                />
                                Войти/Регистрация
                            </NavLink>
                            <Basket/>
                        </Nav>
                    }
                </Container>
            </Navbar>

            <Dropdown.Divider style={{background: 'gray', height:1}}/>
        </div>
    );
});

export default NavBar;