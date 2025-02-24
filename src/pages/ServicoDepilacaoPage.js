import React from "react";
import { Link } from "react-router-dom";
import "../css/Servico.css"; // Importe o CSS
import DepilacaoImage from "../images/depilacao.jpeg"; // Importe a imagem

function ServicoDepilacaoPage() {
  return (
    <div className="servico-page">
      <h1>Depilação</h1>
      <p>Técnicas modernas para uma pele suave.</p>

      {/* Detalhes do Serviço */}
      <div className="servico-detalhes">
        <img src={DepilacaoImage} alt="Depilação" />
        <div className="descricao">
          <h2>O que oferecemos?</h2>
          <ul>
            <li>Depilação a cera quente e fria.</li>
            <li>Depilação a laser.</li>
            <li>
              Tratamentos pós-depilação para hidratação e cuidado da pele.
            </li>
            <li>Profissionais especializados e produtos de alta qualidade.</li>
          </ul>
        </div>
      </div>

      {/* Botão de Agendamento */}
      <Link to="/agenda#depilacao" className="agendamento-button">
        Agendar Depilação
      </Link>
    </div>
  );
}

export default ServicoDepilacaoPage;
