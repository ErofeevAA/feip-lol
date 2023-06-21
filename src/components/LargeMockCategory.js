import React from 'react';
import './LargeMockCategory.css'
import {Link} from "react-router-dom";


const LargeMockCategory = (props) => {
    const cardStyle = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <Link to={props.link}>
            <div className="large-card" style={cardStyle}>
                <div className="large-overlay"></div> {/* Затемненный фон */}
                <h2 className="large-title">{props.title}</h2>
            </div>
        </Link>
    );
};

export default LargeMockCategory;