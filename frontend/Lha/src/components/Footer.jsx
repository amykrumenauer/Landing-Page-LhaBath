import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C8D7C", color: "#fff", padding: "20px", textAlign: "center" }}>
      <p>Sobre o LhaBath</p>
      <p>Soluções inteligentes para banheiros empresariais, promovendo eficiência, conforto e sustentabilidade.</p>
      <p>Nossos Valores: Inovação | Sustentabilidade | Eficiência | Qualidade | Compromisso</p>
      <div>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>Instagram</a>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>LinkedIn</a>
      </div>
      <p>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>Termos de Uso</a> | 
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>Política de Privacidade</a>
      </p>
    </footer>
  );
}

export default Footer;
