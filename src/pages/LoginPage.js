import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {ACTIVATE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {login, registration} from "../http/userAPI";
import InputFormWithTitle from "../components/InputFormWithTitle";
import {Context} from "../index";

const LoginPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            if (isLogin) {
                let data = await login(email, password)
                console.log('login')
                user.setUser(user)
                user.setIsAuth(true)
                navigate(SHOP_ROUTE)
            } else {
                try {
                    console.log('reg')
                    let data = await registration(email, password);
                    navigate(ACTIVATE_ROUTE, {state: {phone: email}});
                } catch (e) {
                    alert(e.response.data.message);
                }

            }
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center"
             style={{background: '#E5E5E5', height: `60vh`}}>
            <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{
                    padding: `40px 32px 40px 32px`,
                    margin:`32px 0 32px 0`,
                    background: '#fff',
                    maxWidth: 400,
                    minHeight: 350,
                    maxHeight: 400,
                    boxShadow: `0 0 50px rgba(71, 73, 83, 0.3)`
            }}>
                <div style={{color: '#323540', fontSize: 18, fontWeight: 700}}>{isLogin ? 'Логин' : 'Регистрация'}</div>
                <InputFormWithTitle
                    title="Логин"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputFormWithTitle
                    title="Пароль"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <div className="d-flex flex-column">
                    <Button
                        onClick={click}
                        variant={"secondary"}
                        style={{width: `100%`}}>
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    <div style={{height: 10}}/>
                    {isLogin
                        ? <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
                        : <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default LoginPage;