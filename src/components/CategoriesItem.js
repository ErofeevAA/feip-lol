import React from 'react';
import Col from "react-bootstrap/Col";
import {NavbarBrand} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts/RoutesConst";
import Nav from "react-bootstrap/Nav";

const CategoriesItem = (categories) => {

    // console.log(categories.categories.children)
    return (
        <Col>
            <NavbarBrand className='text-dark fw-bold text-uppercase' style={{fontSize: 12}}>
                {categories.categories.name}
            </NavbarBrand>

            <Nav className='d-flex flex-column mt-3 align-items-start'>
                {categories.categories.children.map(subCategories =>
                    <NavLink key={subCategories.id} to='/' style={{color: "grey"}}>{subCategories.name}</NavLink>
                )}
            </Nav>
        </Col>
    );
};

export default CategoriesItem;