import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts/RoutesConst";
import {login} from "../http/userAPI";
import InputFormWithTitle from "../components/InputFormWithTitle";
import {Context} from "../index";

const LoginPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
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
                <div style={{color: '#323540', fontSize: 18, fontWeight: 700}}>Логин</div>
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
                         Войти
                    </Button>
                    <div style={{height: 10}}/>
                    <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;