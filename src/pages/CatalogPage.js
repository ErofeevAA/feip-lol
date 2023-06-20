import React, {useContext, useEffect} from 'react';
import {getProductsByCategory} from "../http/productsAPI";
import {Context} from "../index";
import ProductsList from "../components/ProductsList";
import {useLocation} from "react-router-dom";

const CatalogPage = () => {
    let location = useLocation();

    const {products} = useContext(Context)

    console.log(location.state.categoryID)


    useEffect(() => {

        getProductsByCategory(location.state.categoryID).then(data => {
            products.setProducts(data['data'])
        })

    }, [location.state.categoryID])



    return(
        <div className="d-flex justify-content-center flex-column mb-5">
            <ProductsList/>

        </div>
    );
}

export default CatalogPage;