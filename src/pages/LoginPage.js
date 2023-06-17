
import React from "react";
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts/RoutesConst";

const LoginPage = () => {

    return (
        <div className="d-flex justify-content-center align-items-center"
             style={{background: '#fff', height: `60vh`}}>
            <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{
                    padding: `40px 32px 40px 32px`,
                    margin:`32px 0 32px 0`,
                    background: '#fff',
                    maxWidth: 368,
                    minHeight: 300,
                    maxHeight: 400,
                    boxShadow: `0 0 50px rgba(71, 73, 83, 0.3)`
            }}>
                <div style={{color: '#323540', fontSize: 18, fontWeight: 700}}>Логин</div>
                <Form.Control
                    placeholder="Введите ваш номер телефона"
                />
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                />
                <div className="d-flex flex-column">
                    <Button
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