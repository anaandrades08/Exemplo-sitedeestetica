import React from "react";
import { Link } from "react-router-dom";
import ServicoManicure from "../images/pedicure.jpg";
import ServicoDepilacao from "../images/depilacao.jpeg";
import ServicoFacial from "../images/facial.jpeg";
import ServicoCabeleireiro from "../images/cabeleireiro.jpg";
import ServicoMassagem from "../images/massagem.jpg";
import Cliente1 from "../images/mulher-morena.jpg";
import "../css/Main.css";

export default function Main() {
  // Função para rolar suavemente até uma seção
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section id="destaque" className="destaque">
        <div className="destaque-content">
          <h1>Transforme sua beleza conosco!</h1>
          <p>Descubra os melhores tratamentos para realçar sua autoestima.</p>
          <button
            className="cta-button"
            onClick={() => scrollToSection("contato")}
          >
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* Contêiner Centralizado */}
      <div className="container">
        {/* Seção Serviços */}
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

        <section id="sobre" className="sobre">
          <h2>Sobre Nós</h2>
          <p>
            Somos especialistas em beleza e estética, oferecendo serviços de
            alta qualidade para realçar sua autoestima. Nossa equipe é treinada
            e comprometida com a sua satisfação.
          </p>
        </section>

        <section id="depoimentos" className="depoimentos">
          <h2>Depoimentos</h2>
          <div className="depoimentos-grid">
            <div className="depoimento">
              <img src={Cliente1} alt="Cliente 1" />
              <p>"Adorei o atendimento! Minha pele nunca esteve tão boa."</p>
              <span>- Ana Silva</span>
            </div>
            <div className="depoimento">
              <img src={Cliente1} alt="Cliente 2" />
              <p>"Profissionais incríveis e ambiente super aconchegante."</p>
              <span>- Carla Souza</span>
            </div>
            <div className="depoimento">
              <img src={Cliente1} alt="Cliente 3" />
              <p>"O ambiente é ótimo! Maravilhoso atendimento"</p>
              <span>- Luzia Maria</span>
            </div>
          </div>
        </section>

        <section id="contato" className="contato">
          <h2>Entre em Contato</h2>
          <form action="#" method="post">
            <input type="text" name="nome" placeholder="Seu Nome" required />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              required
            />
            <textarea
              name="mensagem"
              placeholder="Sua Mensagem"
              required
            ></textarea>
            <button type="submit" className="cta-button">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
