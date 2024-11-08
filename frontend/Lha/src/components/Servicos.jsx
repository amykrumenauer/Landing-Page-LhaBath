import React from "react";

function Servicos() {
  return (
    <section id="servicos" style={{ padding: "50px" }}>
      <h2>Serviços</h2>
      <div>
        <h3>Aviso de Lixeira Cheia</h3>
        <p>Sensores nas lixeiras enviam alertas quando atingem sua capacidade máxima.</p>
        <p><strong>Preço:</strong> R$ 32,00</p>

        <h3>Identificação de Nível de Sabão</h3>
        <p>Sensores monitoram os níveis e enviam notificações quando o sabão está acabando.</p>
        <p><strong>Preço:</strong> R$ 80,00</p>

        <h3>Iluminação Inteligente</h3>
        <p>Sistema que acende e apaga com base na ocupação, otimizando o consumo de energia.</p>
        <p><strong>Preço:</strong> R$ 250,00</p>

        <h3>Monitoramento de Limpeza</h3>
        <p>Sensores monitoram a limpeza, notificando quando é necessário fazer uma manutenção.</p>
        <p><strong>Preço:</strong> Sob consulta</p>
      </div>
    </section>
  );
}

export default Servicos;
