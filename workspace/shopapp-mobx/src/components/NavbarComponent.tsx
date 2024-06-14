import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function NavbarComponent() {
  let { quantity } = useContext(CartContext); // Consumer
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Shopapp</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} color='white' />
            <Badge>{quantity}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/new_product">New Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
