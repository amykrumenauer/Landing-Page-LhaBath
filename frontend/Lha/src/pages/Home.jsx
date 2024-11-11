import React from "react";

function Home() {
  return (
    <section id="home" style={{ textAlign: "center", padding: "50px" }}>
      <h1>Tenha mais gestão e qualidade com o LhaBath!</h1>
      <img src="./src/imagens/banheiro.png" alt="Banheiro inteligente" style={{ width: "50%", maxHeight: "500px", marginTop: "20px" }} />
      <div style={{ marginTop: "30px" }}>
        <button style={{ backgroundColor: "#2C8D7C", color: "#fff", padding: "10px 20px", border: "none", cursor: "pointer" }}>
          Inscreva-se Aqui
        </button>
      </div>
    </section>
  );
}

export default Home;

