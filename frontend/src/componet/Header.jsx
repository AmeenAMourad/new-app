import React from 'react';
import { Navbar,Nav,Container, NavbarBrand } from "react-bootstrap";
import { FaShoppingCart,FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
            <Container>
                <Navbar.Brand href='/'>Proshop1fasd</Navbar.Brand>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header