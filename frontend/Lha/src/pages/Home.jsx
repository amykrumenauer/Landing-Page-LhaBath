import React, { useState, useEffect } from "react";

function Home() {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar a visibilidade do texto

  // Estilos em linha para o botão
  const buttonStyle = {
    backgroundColor: hovered ? "#1e6f57" : "#2C8D7C", 
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease", 
    boxShadow: hovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",  // Adicionando sombra no hover
  };

  // Estilos em linha para a imagem com efeito de hover
  const imageStyle = {
    width: "50%",
    maxHeight: "500px",
    marginTop: "20px",
    transition: "transform 0.3s ease",  // Animação de transformação
  };

  // Estilos quando o mouse passa sobre a imagem
  const imageHoveredStyle = {
    ...imageStyle,
    transform: "scale(1.1)",  // Aumenta a imagem em 10%
  };

  // Efeito para a transição de opacidade do texto
  useEffect(() => {
    // Quando o componente é montado, a animação de fade-in começa após um pequeno delay
    setTimeout(() => {
      setIsVisible(true); // Torna o texto visível
    }, 500); // Atraso de 0.5 segundos para o início da animação
  }, []);

  return (
    <section id="home" style={{ textAlign: "center", padding: "50px" }}>
      {/* Título com animação de fade-in */}
      <h1 className={isVisible ? "fade-in" : ""}>
        Tenha mais gestão e qualidade com o LhaBath!
      </h1>
      
      {/* Imagem com efeito de hover */}
      <img
        src="./src/imagens/banheiro.png"
        alt="Banheiro inteligente"
        style={hovered ? imageHoveredStyle : imageStyle}  // Aplica o estilo de hover na imagem
        onMouseEnter={() => setHovered(true)}  // Ativa o hover para a imagem
        onMouseLeave={() => setHovered(false)} // Desativa o hover para a imagem
      />
      
      <div style={{ marginTop: "30px" }}>
        <button
          style={buttonStyle}
          onMouseEnter={() => setHovered(true)}  // Ativa o hover para o botão
          onMouseLeave={() => setHovered(false)} // Desativa o hover para o botão
        >
          Inscreva-se Aqui
        </button>
      </div>
    </section>
  );
}

export default Home;



