import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importando o Carousel do React-Bootstrap

function ValoresCarousel() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nossos Valores</h2>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#2C8D7C' }}>
            <div className="text-center">
              <h4>Inovação</h4>
              <p>Buscamos sempre novas soluções tecnológicas para atender às necessidades dos nossos clientes.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#46A788' }}>
            <div className="text-center">
              <h4>Sustentabilidade</h4>
              <p>Promovemos o uso consciente de recursos para reduzir o impacto ambiental.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#66BBA1' }}>
            <div className="text-center">
              <h4>Eficiência</h4>
              <p>Garantimos a otimização dos processos, melhorando resultados e economizando tempo e recursos.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#7AC7B2' }}>
            <div className="text-center">
              <h4>Qualidade</h4>
              <p>Oferecemos produtos duráveis e confiáveis, com foco na satisfação do cliente.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '300px', backgroundColor: '#8FD9C4' }}>
            <div className="text-center">
              <h4>Compromisso</h4>
              <p>Estamos dedicados ao sucesso dos nossos clientes, oferecendo soluções personalizadas e um atendimento de excelência.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ValoresCarousel;

