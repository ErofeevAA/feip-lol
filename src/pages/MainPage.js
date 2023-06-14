import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MainPage = () => {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center">
                    <div className="bg-info" style={{width: "900px", height: "300px"}}>Картинка</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                </div>
                <div className="d-flex justify-content-between my-3">
                    <div className="bg-dark" style={{width: '500px', height: "100px"}}></div>
                    <div className="bg-dark" style={{width: '500px', height: "100px"}}></div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                    <div className="bg-dark" style={{width: '300px', height: "100px"}}></div>
                </div>

            </Container>

        </div>
    );
};

export default MainPage;