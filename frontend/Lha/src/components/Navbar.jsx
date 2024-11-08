import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

function NavBar({ toggleDarkMode }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">LhaBath</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#quemSomos">Quem Somos</Nav.Link>
        <Nav.Link href="#servicos">Serviços</Nav.Link>
        <Nav.Link href="#contato">Contato</Nav.Link>
      </Nav>
      {/* Switch para alternar entre modos */}
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Modo Escuro"
        onChange={toggleDarkMode} // Alterna o modo quando o switch é acionado
      />
    </Navbar>
  );
}

export default NavBar;



