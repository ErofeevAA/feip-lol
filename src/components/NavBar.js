import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {Button, Dropdown, Image} from "react-bootstrap";
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

const NavBar = observer(() => {
    const {user} = useContext(Context)
    // const navigate = useNavigate()

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
                    <NavLink to={SHOP_ROUTE}>
                        <Image src={logo}/>
                    </NavLink>
                    {/*<Dropdown className='mx-3'>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Каталог
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>*/}

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