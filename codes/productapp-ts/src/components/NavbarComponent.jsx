import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import { Badge } from 'react-bootstrap';

export default function NavbarComponent() {
  let { quantity } = useContext(CartContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>ACME Inc.</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/"> Products </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart <Badge>{quantity}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/form"> Form </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
