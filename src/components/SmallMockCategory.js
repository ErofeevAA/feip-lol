import React from 'react';
import aboutImg from "../assets/aboutImg.png";
import {Button} from "react-bootstrap";
import './SmallMockCategory.css'
import {Link} from "react-router-dom";

const SmallMockCategory = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <Link to={props.link}>
            <div className="card" style={cardStyle}>
                <div className="overlay"></div> {/* Затемненный фон */}
                <h2 className="title">{props.title}</h2>
            </div>
        </Link>
    );
};

export default SmallMockCategory;