import React, {useState} from 'react';
import InputFormWithTitle from "./InputFormWithTitle";
import {Button} from "react-bootstrap";
import {activate} from "../http/userAPI";
import {useLocation} from "react-router-dom";

const Sms = () => {
    const [sms, setSms] = useState()
    const [isSuccess, setSuccess] = useState('undefined')

    const {state} = useLocation()
    const {phone} = state

    function click(_) {
        try {
            activate(phone, sms);
            setSuccess('true')
        } catch (e) {
            setSuccess('false')
        }

    }
    if (isSuccess === 'undefined') {
        return (
            <div className="d-flex justify-content-center align-items-center"
                 style={{background: '#E5E5E5', height: `60vh`}}>
                <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{
                        padding: `40px 32px 40px 32px`,
                        margin: `32px 0 32px 0`,
                        background: '#fff',
                        maxWidth: 400,
                        minHeight: 200,
                        maxHeight: 250,
                        boxShadow: `0 0 50px rgba(71, 73, 83, 0.3)`
                    }}>
                    <InputFormWithTitle
                        title="Смс-код"
                        type="password"
                        onChange={e => setSms(e.target.value)}
                    />
                    <Button
                        onClick={click}
                        variant={"secondary"}
                        style={{width: `100%`}}>
                        Активировать аккаунт
                    </Button>
                </div>

            </div>
        );
    } else if (isSuccess === 'false') {
        return (
            <div className="d-flex justify-content-center align-items-center"
                 style={{background: '#E5E5E5', height: `60vh`}}>
                <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{
                        padding: `40px 32px 40px 32px`,
                        margin: `32px 0 32px 0`,
                        background: '#fff',
                        maxWidth: 400,
                        minHeight: 200,
                        maxHeight: 250,
                        boxShadow: `0 0 50px rgba(71, 73, 83, 0.3)`
                    }}>
                    <div>Неправильный код</div>
                    <InputFormWithTitle
                        title="Смс-код"
                        type="password"
                        onChange={e => setSms(e.target.value)}
                    />
                    <Button
                        onClick={click}
                        variant={"secondary"}
                        style={{width: `100%`}}>
                        Активировать аккаунт
                    </Button>
                </div>

            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center align-items-center">Успешно!</div>
        );
    }
};

export default Sms;