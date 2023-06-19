import React, {useContext} from 'react';
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const {products} = useContext(Context)
    console.log(products)

    return (
        <Row className="d-flex">
            {products.products.map(products =>
                <ProductItem key={products.id} products={products}/>
            )}
        </Row>
    );
};

export default ProductsList;