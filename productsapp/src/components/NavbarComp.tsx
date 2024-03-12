import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand href="#home">CISCO</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/new_product">Product Form</Nav.Link>
            </Nav>
        </Navbar>
    )
}
