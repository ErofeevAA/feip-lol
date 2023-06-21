import React from 'react';
import './MainMock.css'
import {Link} from "react-router-dom";


const MainMock = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <Link to={props.link}>
            <div className="main-card" style={cardStyle}>
                <div className="main-overlay"></div> {/* Затемненный фон */}
                <h2 className="main-title">{props.title}</h2>
            </div>
        </Link>
    );
};

export default MainMock;