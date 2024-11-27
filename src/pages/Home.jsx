import React, { useState, useEffect } from "react";
import Banheiro from '../imagens/banheiro.png'

function Home() {
  // Estado para controlar a visibilidade do texto
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  // Estilos em linha para o botão
  const buttonStyle = {
    backgroundColor: hovered ? "#1e6f57" : "#2C8D7C", 
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease", 
    boxShadow: hovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none", 
  };

  // Estilos em linha para a imagem com efeito de hover
  const imageStyle = {
    width: "50%",
    maxHeight: "500px",
    marginTop: "20px",
    transition: "transform 0.3s ease", 
  };

  // Estilos quando o mouse passa sobre a imagem
  const imageHoveredStyle = {
    ...imageStyle,
    transform: "scale(1.1)",  
  };

  // Efeito para a transição de opacidade do texto
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true); 
    }, 500); 
  }, []);

  return (
    <section id="home" style={{ textAlign: "center", padding: "50px" }}>
      {/* Título com animação de fade-in */}
      <h1 className={isVisible ? "fade-in" : ""}>
        Tenha mais gestão e qualidade com o LhaBath!
      </h1>
      
      {/* Imagem com efeito de hover */}
      <img
        src={Banheiro}
        alt="Banheiro inteligente"
        style={hovered ? imageHoveredStyle : imageStyle}  
        onMouseEnter={() => setHovered(true)}  
        onMouseLeave={() => setHovered(false)} 
      />
      
      <div style={{ marginTop: "30px" }}>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHovered(true)}  
          onMouseLeave={() => setHovered(false)} 
        >
          Inscreva-se Aqui
        </button>
      </div>
    </section>
  );
}

export default Home;



