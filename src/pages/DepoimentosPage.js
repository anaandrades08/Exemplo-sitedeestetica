import React, { useState } from "react";
import { validarFormularioDepoimento } from "../validation/validationDepoimento";
import "../css/Depoimentos.css";

const DepoimentosPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    mensagem: "",
    avaliacao: "",
  });

  const [errors, setErrors] = useState({}); // Estado para armazenar os erros
  const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem de sucesso

  const fields = [
    { label: "Nome", name: "nome", type: "text" },
    { label: "Mensagem", name: "mensagem", type: "textarea" },
    { label: "Avaliação", name: "avaliacao", type: "select" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({}); // Limpa os erros

    const validation = validarFormularioDepoimento(formData);

    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSuccessMessage("Mensagem enviada com sucesso!");

    setTimeout(() => {
      setFormData({ nome: "", mensagem: "", avaliacao: "" });
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="depoimentos-container">
      <div className="depoimentos-box">
        <h2>Depoimentos</h2>
        <div className="depoimentos-message">
          <p>
            "Ótimo serviço! Atendimento excelente e resultados maravilhosos."
          </p>
          <span>- Cliente Satisfeito</span>
        </div>
        <div className="depoimentos-message">
          <p>"A equipe é super profissional e atenciosa. Recomendo a todos!"</p>
          <span>- Cliente Feliz</span>
        </div>
        <div className="depoimentos-message">
          <p>
            "Minha experiência foi incrível, não poderia estar mais satisfeito."
          </p>
          <span>- Cliente Entusiasmado</span>
        </div>
      </div>
      {/* Formulário */}
      <div className="depoimento-form-box">
        <h2>Depoimento</h2>
        <form
          id="form-depoimento"
          className="form-depoimento"
          onSubmit={handleSubmit}
        >
          {fields.map(({ label, name, type }) => (
            <div className="depoimento-input-group" key={name}>
              <label htmlFor={name}>{label}</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                />
              ) : type === "select" ? (
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                >
                  <option value="">---</option>
                  <option value="1">1 - Péssimo</option>
                  <option value="2">2 - Ruim</option>
                  <option value="3">3 - Regular</option>
                  <option value="4">4 - Bom</option>
                  <option value="5">5 - Excelente</option>
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                />
              )}
              {/* Mensagem de erro específica para cada campo */}
              {errors[name] && (
                <p id={`error-${name}`} className="error-message" role="alert">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}
          {/* Botões */}
          <div className="Button-depoimento">
            <button type="submit" className="btn-submit">
              Enviar
            </button>
            <button
              type="reset"
              className="btn-reset"
              onClick={() => {
                setFormData({ nome: "", mensagem: "", avaliacao: "" });
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
    </div>
  );
};

export default DepoimentosPage;
