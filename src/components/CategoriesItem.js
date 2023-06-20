import React from 'react';
import Col from "react-bootstrap/Col";
import {NavbarBrand} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts/RoutesConst";
import Nav from "react-bootstrap/Nav";

const CategoriesItem = (categories) => {

    // console.log(categories.categories.children)
    return (
        <Col>
            <Link
                to={PRODUCT_ROUTE + '/' + categories.categories.id}
                state={{ categoryID: categories.categories.id}}
                key={categories.categories.id}
                className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}
            >
                {categories.categories.name}
            </Link>

            <Nav className='d-flex flex-column mt-3 align-items-start'>
                {categories.categories.children.map(subCategories =>
                    <Link
                        to={PRODUCT_ROUTE + '/' + subCategories.id}
                        state={{ categoryID: subCategories.id}}
                        key={subCategories.id}
                        style={{color: "grey"}}>{subCategories.name}
                    </Link>
                )}
            </Nav>
        </Col>
    );
};

export default CategoriesItem;