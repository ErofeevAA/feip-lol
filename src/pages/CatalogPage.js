import React, {useContext, useEffect} from 'react';
import ProductStore from "../store/ProductStore";
import ProductItem from "../components/ProductItem";
import Container from "react-bootstrap/Container";
import {getProducts} from "../http/productsAPI";
import {Context} from "../index";
import ProductsList from "../components/ProductsList";

const CatalogPage = () => {
    const {products} = useContext(Context)


    useEffect(() => {
        getProducts().then(data => {
            // console.log(data['data'])
            products.setProducts(data['data'])
            // product.products.map(data => console.log(data.id))
        })


    }, [])



    return(
        <div className="d-flex justify-content-center flex-column mb-5">
            <ProductsList/>

        </div>
    );
}

export default CatalogPage;