import React, {useContext} from 'react';
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const {products} = useContext(Context)
    // console.log(products)

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {products.products.map(product =>
                <ProductItem key={products.id} product={product}/>
            )}
        </div>
    );
};

export default ProductsList;