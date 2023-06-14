import React from 'react';
import ProductStore from "../store/ProductStore";
import ProductItem from "../components/ProductItem";
import Container from "react-bootstrap/Container";

const CatalogPage = () => {
    return(
        <div className="d-flex justify-content-center flex-column mb-5">
            <Container>
                <div className="d-flex flex-wrap justify-content-center">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </Container>

        </div>
    );
}

export default CatalogPage;