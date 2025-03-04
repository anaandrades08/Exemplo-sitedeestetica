import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { validarFormularioContato } from "../validation/validationContato";

//import de imagens
import ServicoManicure from "../images/pedicure.jpg";
import ServicoDepilacao from "../images/depilacao.jpg";
import ServicoFacial from "../images/facial.jpg";
import ServicoCabeleireiro from "../images/cabeleireiro.jpg";
import ServicoMassagem from "../images/massagem.jpg";
import Cliente1 from "../images/mulher-morena.jpg";
import SobreImage from "../images/sobre-imagem.jpg";
import "../css/Main.css";

export default function Main() {
  // Função para rolar suavemente até uma seção
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const fields = [
    { label: "Nome", name: "nome", type: "text" },
    { label: "Email", name: "email", type: "text" },
    {
      label: "Telefone",
      name: "telefone",
      type: "text",
      mask: [
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /[1-9]/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    },

    { label: "Mensagem", name: "mensagem", type: "textarea" },
  ];

  // Função para formulario de contato
  const [errors, setErrors] = useState({}); // Estado para armazenar os erros
  const [successMessage, setSuccessMessage] = useState(""); // Estado para armazenar os erros

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrors({}); // Limpa os erros se a validação for bem-sucedida
    const validation = validarFormularioContato(formData);

    if (!validation.success) {
      setErrors(validation.errors); // Atualiza os erros no estado
      return;
    }

    setErrors({}); // Limpa os erros se a validação for bem-sucedida
    setSuccessMessage("Mensagem enviada com sucesso!");
    // Atrasando a mensagem de sucesso por 2 segundos (2000ms)
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <main>
      <section
        id="destaque"
        className="destaque"
        aria-labelledby="destaque-title"
      >
        <div className="destaque-content">
          <h1 id="destaque-title">Transforme sua beleza conosco!</h1>
          <p>Descubra os melhores tratamentos para realçar sua autoestima.</p>
          <button
            onClick={() => scrollToSection("contato")}
            aria-label="Clique para agendar uma consulta e transformar sua beleza"
          >
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* Contêiner Centralizado */}
      <div className="container">
        {/* Seção Sobre */}
        <section id="sobre" className="sobre" aria-labelledby="sobre-title">
          <div className="sobre-container">
            <h2 id="sobre-title">Sobre Nós</h2>
            <div className="sobre-conteudo">
              <div className="sobre-texto">
                <p>
                  Somos especialistas em beleza e estética, oferecendo serviços
                  de alta qualidade para realçar sua autoestima. Nossa equipe é
                  treinada e comprometida com a sua satisfação.
                </p>
                <p>
                  Com anos de experiência no mercado, buscamos sempre inovar e
                  trazer as melhores técnicas e produtos para nossos clientes.
                  Acreditamos que cada pessoa é única e merece um tratamento
                  exclusivo e personalizado.
                </p>
                <p>
                  Nossos valores incluem:
                  <ul role="list">
                    <li role="listitem">Excelência no atendimento</li>
                    <li role="listitem">Qualidade nos serviços</li>
                    <li role="listitem">Compromisso com o cliente</li>
                    <li role="listitem">Inovação constante</li>
                  </ul>
                </p>
                <p>
                  Venha nos conhecer e descubra um novo conceito em beleza e
                  bem-estar!
                </p>
              </div>
              <div className="sobre-image">
                <img
                  src={SobreImage}
                  alt="Imagem de equipe de estética com clientes satisfeitos"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section
          id="servicos"
          className="servicos"
          aria-labelledby="servicos-title"
        >
          <h2 id="servicos-title">Nossos Serviços</h2>
          <div className="servicos-grid">
            <div className="servico">
              <Link
                to="/manicure"
                className="servico-link"
                aria-label="Veja nossos serviços de Manicure e Pedicure"
              >
                <img
                  src={ServicoManicure}
                  alt="Imagem de mãos cuidadas após manicure e pedicure"
                />
                <h3>Manicure e Pedicure</h3>
                <p>Cuidados profissionais para suas mãos e pés.</p>
              </Link>
            </div>
            <div className="servico">
              <Link
                to="/cabelo"
                className="servico-link"
                aria-label="Veja nossos serviços de Cortes de Cabelo"
              >
                <img
                  src={ServicoCabeleireiro}
                  alt="Imagem de corte de cabelo profissional"
                />
                <h3>Cortes de Cabelo</h3>
                <p>Especialista em todos os tipos de cabelo.</p>
              </Link>
            </div>
            <div className="servico">
              <Link
                to="/depilacao"
                className="servico-link"
                aria-label="Veja nossos serviços de Depilação"
              >
                <img
                  src={ServicoDepilacao}
                  alt="Imagem de técnica de depilação"
                />
                <h3>Depilação</h3>
                <p>Técnicas modernas para uma pele suave.</p>
              </Link>
            </div>
            <div className="servico">
              <Link
                to="/facial"
                className="servico-link"
                aria-label="Veja nossos serviços de Tratamentos Faciais"
              >
                <img src={ServicoFacial} alt="Imagem de tratamentos faciais" />
                <h3>Tratamentos Faciais</h3>
                <p>Rejuvenescimento e cuidados para o rosto.</p>
              </Link>
            </div>
            <div className="servico">
              <Link
                to="/massagem"
                className="servico-link"
                aria-label="Veja nossos serviços de Massagens Corporais"
              >
                <img
                  src={ServicoMassagem}
                  alt="Imagem de massagem corporal relaxante"
                />
                <h3>Massagens corporais</h3>
                <p>Relaxante e modeladoras.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section
          id="depoimentos"
          className="depoimentos"
          aria-labelledby="depoimentos-title"
        >
          <h2 id="depoimentos-title">Depoimentos</h2>
          <div className="depoimentos-grid">
            <div className="depoimento">
              <img
                src={Cliente1}
                alt="Cliente Ana Silva sorrindo após tratamento de estética"
              />
              <p>"Adorei o atendimento! Minha pele nunca esteve tão boa."</p>
              <span>- Ana Silva</span>
            </div>
            <div className="depoimento">
              <img
                src={Cliente1}
                alt="Cliente Carla Souza sorrindo após tratamento"
              />
              <p>"Profissionais incríveis e ambiente super aconchegante."</p>
              <span>- Carla Souza</span>
            </div>
            <div className="depoimento">
              <img
                src={Cliente1}
                alt="Cliente Luzia Maria após um tratamento de estética"
              />
              <p>"O ambiente é ótimo! Maravilhoso atendimento"</p>
              <span>- Luzia Maria</span>
            </div>
          </div>
        </section>
        {/* Seção Contato */}
        <section id="contato" className="contato">
          <h2 id="contato-titulo">Entre em Contato</h2>
          <div className="form-contato-conteudo">
            <form
              id="form-contato"
              className="form-contato"
              onSubmit={handleSubmit}
              aria-labelledby="contato-titulo"
            >
              {fields.map(({ label, name, type, mask }) => (
                <div className="contato-input-group" key={name}>
                  <label htmlFor={name}>{label}</label>
                  {/* Types */}
                  {type === "textarea" ? (
                    <textarea
                      name={name}
                      id={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={errors[name] ? "input-error" : ""}
                      aria-required="true"
                      aria-describedby={
                        errors[name] ? `error-${name}` : undefined
                      }
                    />
                  ) : mask ? (
                    <MaskedInput
                      mask={mask}
                      name={name}
                      id={name}
                      value={formData[name]}
                      onChange={handleChange}
                      guide={false} // Não mostrar os caracteres de guia durante a digitação
                      className={errors[name] ? "input-error" : ""}
                      aria-required="true"
                      aria-describedby={
                        errors[name] ? `error-${name}` : undefined
                      }
                    />
                  ) : (
                    <input
                      type={type}
                      name={name}
                      id={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className={errors[name] ? "input-error" : ""}
                      aria-required="true"
                      aria-describedby={
                        errors[name] ? `error-${name}` : undefined
                      }
                      readOnly={name === "cidade" || name === "uf"} // Torna Cidade e UF somente leitura
                    />
                  )}
                  {/* Mensagem de erro do campo */}
                  {errors[name] && (
                    <p
                      id="erro-mensagem"
                      className="error-message"
                      role="alert"
                    >
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Botões */}
              <div className="Button-contato">
                <button type="submit" className="cta-submit">
                  Enviar Mensagem
                </button>
                <button
                  type="reset"
                  className="cta-reset"
                  onClick={() => {
                    setFormData({
                      nome: "",
                      email: "",
                      telefone: "",
                      mensagem: "",
                    });
                    setErrors({});
                    setSuccessMessage("");
                  }}
                >
                  Limpar
                </button>
              </div>

              {/* Mensagem de sucesso */}
              {successMessage && (
                <p className="success-message" role="status" aria-live="polite">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
      {/* fim div container */}
    </main>
  );
}
