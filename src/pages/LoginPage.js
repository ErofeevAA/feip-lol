import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts/RoutesConst";
import {login} from "../http/userAPI";
import {getProducts} from "../http/productsAPI";
import axios from "axios";
import InputFormWithTitle from "../components/InputFormWithTitle";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            data = await login(email, password)
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    const click2 = async () => {
        try {
            let data2
            // data2 = await getProducts()
            data2 = await axios.get('http://localhost:8080/products')
            // data2 = await fetch("http://localhost:8080/products")
            // data2 = await fetch("https://reqres.in/api/products/3")
            // data2 = await axios.get('https://reqres.in/api/products/3')

            console.log(data2)
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
                <InputFormWithTitle title="Логин"/>
                <InputFormWithTitle
                    title="Пароль"
                    type="password"
                />
                <Form.Control
                    placeholder="Введите ваш номер телефона"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="d-flex flex-column">
                    <Button
                        onClick={click}
                        variant={"secondary"}
                        style={{width: `100%`}}>
                         Войти
                    </Button>
                    <Button
                        onClick={click2}
                        variant={"secondary"}
                        style={{width: `100%`}}>
                        data
                    </Button>
                    <div style={{height: 10}}/>
                    <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;