import React from "react";
import "../css/Depoimentos.css";

const DepoimentosPage = () => {
  return (
    <div className="depoimentos-container">
      <div className="depoimentos-box">
        <h2>Depoimentos</h2>
        <div className="depoimento">
          <p>
            "Ótimo serviço! Atendimento excelente e resultados maravilhosos."
          </p>
          <span>- Cliente Satisfeito</span>
        </div>
        <div className="depoimento">
          <p>"A equipe é super profissional e atenciosa. Recomendo a todos!"</p>
          <span>- Cliente Feliz</span>
        </div>
        <div className="depoimento">
          <p>
            "Minha experiência foi incrível, não poderia estar mais satisfeito."
          </p>
          <span>- Cliente Entusiasmado</span>
        </div>
      </div>
    </div>
  );
};

export default DepoimentosPage;
