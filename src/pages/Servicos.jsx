import React from "react";
import { FaWater, FaToiletPaper, FaTrashAlt, FaSoap } from 'react-icons/fa';  // Importando ícones do React Icons

function Servicos() {
  return (
    <section id="servicos" style={{ padding: "100px 50px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "36px" }}>Serviços</h2>
      
      <div className="services-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {/* Card Controle de Temperatura e Umidade */}
        <div className="service-card" style={applyDarkModeStyles()}>
          <FaWater size={40} color="#fff" style={{ marginBottom: "20px" }} /> {/* Ícone de água */}
          <h3>Controle de Temperatura e Umidade</h3>
          <p>Sensores que controlam a temperatura e umidade para propocionar maior conforto para o usuário.</p>
          <p><strong>Preço:</strong> R$ 70,00</p>
        </div>

        {/* Card Controle de Papel */}
        <div className="service-card" style={applyDarkModeStyles()}>
          <FaToiletPaper size={40} color="#fff" style={{ marginBottom: "20px" }} /> {/* Ícone de papel higiênico */}
          <h3>Controle de Papel</h3>
          <p>Sensores que avisam quando o papel está acabando.</p>
          <p><strong>Preço:</strong> R$ 50,00</p>
        </div>

        {/* Card Aviso de Lixeira Cheia */}
        <div className="service-card" style={applyDarkModeStyles()}>
          <FaTrashAlt size={40} color="#fff" style={{ marginBottom: "20px" }} /> {/* Ícone de lixeira */}
          <h3>Aviso de Lixeira Cheia</h3>
          <p>Sensores nas lixeiras enviam alertas quando atingem sua capacidade máxima.</p>
          <p><strong>Preço:</strong> R$ 32,00</p>
        </div>

        {/* Card Identificação de Nível de Sabão */}
        <div className="service-card" style={applyDarkModeStyles()}>
          <FaSoap size={40} color="#fff" style={{ marginBottom: "20px" }} /> {/* Ícone de sabão */}
          <h3>Identificação de Nível de Sabão</h3>
          <p>Sensores monitoram os níveis e enviam notificações quando o sabão está acabando.</p>
          <p><strong>Preço:</strong> R$ 80,00</p>
        </div>
      </div>
    </section>
  );
}

// Estilo dos cards
const cardStyle = {
  backgroundColor: "#2C8D7C",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  textAlign: "center",
  width: "250px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

// Estilo para o modo escuro
const darkModeCardStyle = {
  backgroundColor: "#2C8D7C",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", 
  padding: "20px",
  textAlign: "center",
  width: "250px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

// Aplicando estilos condicionais com base no modo escuro
const applyDarkModeStyles = () => {
  if (document.body.classList.contains('dark-mode')) {
    return darkModeCardStyle;
  } else {
    return cardStyle;
  }
};

export default Servicos;


