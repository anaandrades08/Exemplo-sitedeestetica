import React from "react";
import { Link } from "react-router-dom";
import "../css/Servico.css"; // Importe o CSS
import FacialImage from "../images/facial.jpg"; // Importe a imagem

function ServicoFacialPage() {
  return (
    <div className="servico-page">
      <h1>Tratamentos Faciais</h1>
      <p>Rejuvenescimento e cuidados para o rosto.</p>

      {/* Detalhes do Serviço */}
      <div className="servico-detalhes">
        <img src={FacialImage} alt="Tratamentos Faciais" />
        <div className="descricao">
          <h2>O que oferecemos?</h2>
          <ul>
            <li>Limpeza de pele profunda.</li>
            <li>Hidratação facial com produtos premium.</li>
            <li>Tratamentos antienvelhecimento.</li>
            <li>Terapias com LED e microagulhamento.</li>
            <li>Máscaras faciais personalizadas.</li>
          </ul>
        </div>
      </div>

      {/* Botão de Agendamento */}
      <a href="#contato" className="agendamento-button">
        Agendar Tratamento Facial
      </a>
    </div>
  );
}

export default ServicoFacialPage;
