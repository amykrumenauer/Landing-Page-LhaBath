import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

function ThemeSwitcher() {
  // Estado para controlar o modo claro ou escuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para aplicar a classe no body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <Container className="my-5">
      {/* Seção para alterar o tema com o switch */}
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h2>Alternar Tema</h2>
          <Form.Check 
            type="switch"
            id="theme-switch"
            label="Modo Escuro"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            className="my-3"
          />
        </Col>
      </Row>

      {/* Exemplo de conteúdo */}
      <Row className="text-center">
        <Col>
          <h3>Bem-vindo ao nosso site!</h3>
          <p>Você pode alternar entre o modo claro e escuro usando o interruptor acima.</p>
          <Button variant={isDarkMode ? "light" : "dark"}>Exemplo de Botão</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ThemeSwitcher;
