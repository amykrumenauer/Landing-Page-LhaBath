import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";


function NavBar({ toggleDarkMode }) {
  return (
    <Navbar className="navbar">
      <Navbar.Brand>LhaBath</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
        <Nav.Link href="#servicos">Serviços</Nav.Link>
        <Nav.Link href="#contato">Contato</Nav.Link>
      </Nav>

      {/* Switch para alternar entre modos */}
      <Form.Check
        type="switch"
        id="custom-switch"
        className="custom-switch"
        onChange={toggleDarkMode}
      />
    </Navbar>
  );
}

export default NavBar;




