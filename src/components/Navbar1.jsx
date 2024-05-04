import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar1 = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RTK ecom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-lg-auto me-lg-0">
            <Nav.Link href="#home" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#link" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link href="#link" as={Link} to="/cart">
              My Cart {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
