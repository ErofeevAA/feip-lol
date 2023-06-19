import {Form} from "react-bootstrap";
import React from "react";

const InputFormWithTitle = ({title, type, onChange, value}) => {
    return (
        <div className="d-flex flex-column align-items-start" style={{width: `100%`}}>
            <div style={{color: '#515562', fontSize: 12}}>{title}</div>
            <Form.Control
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default InputFormWithTitle;