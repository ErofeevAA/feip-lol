import React, {useState} from 'react';
import ProductStore from "../store/ProductStore";
import ProductItem from "../components/ProductItem";

const CatalogPage = () => {
    return(
        <div className="d-flex justify-content-center flex-column">
            <div className="d-flex flex-wrap justify-content-center">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
}

export default CatalogPage;