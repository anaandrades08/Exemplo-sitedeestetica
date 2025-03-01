import React from "react";
import { Link } from "react-router-dom";
import "../css/Servicos.css";
import ServicoManicure from "../images/pedicure.jpg"; // Substitua com o caminho correto para suas imagens
import ServicoCabeleireiro from "../images/cabeleireiro.jpg";
import ServicoDepilacao from "../images/depilacao.jpg";
import ServicoFacial from "../images/facial.jpg";
import ServicoMassagem from "../images/massagem.jpg";

const ServicosPage = () => {
  return (
    <section id="servicos" className="servicos">
      <h2>Nossos Serviços</h2>
      <div className="servicos-grid">
        <div className="servico">
          <Link to="/manicure" className="servico-link">
            <img src={ServicoManicure} alt="Manicure" />
            <h3>Manicure e Pedicure</h3>
            <p>Cuidados profissionais para suas mãos e pés.</p>
          </Link>
        </div>
        <div className="servico">
          <Link to="/cabelo" className="servico-link">
            <img src={ServicoCabeleireiro} alt="Cabeleireiro" />
            <h3>Cortes de Cabelo</h3>
            <p>Especialista em todos os tipos de cabelo.</p>
          </Link>
        </div>
        <div className="servico">
          <Link to="/depilacao" className="servico-link">
            <img src={ServicoDepilacao} alt="Depilação" />
            <h3>Depilação</h3>
            <p>Técnicas modernas para uma pele suave.</p>
          </Link>
        </div>
        <div className="servico">
          <Link to="/facial" className="servico-link">
            <img src={ServicoFacial} alt="Tratamentos Faciais" />
            <h3>Tratamentos Faciais</h3>
            <p>Rejuvenescimento e cuidados para o rosto.</p>
          </Link>
        </div>
        <div className="servico">
          <Link to="/massagem" className="servico-link">
            <img src={ServicoMassagem} alt="Massagem corporal" />
            <h3>Massagens corporais</h3>
            <p>Relaxante e modeladoras.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicosPage;
