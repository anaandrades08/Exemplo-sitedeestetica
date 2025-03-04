import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import "../css/TrabalheConosco.css";
import { validarFormularioTrabalheConosco } from "../validation/validationTrabalheConosco";

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    telefone: "",
    email: "",
    cep: "",
    endereco: "",
    cidade: "",
    uf: "",
    cargo: "",
    experiencia: "",
    numero: "",
    bairro: "",
    complemento: "",
    escolaridade: "",
  });

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(""); // Limpa mensagem de erro de envio anterior
    setErrors({}); // Limpa erro dos inputs anterior
    setSuccessMessage(""); // Limpa sucesso anterior

    const resultadoValidacao = validarFormularioTrabalheConosco(formData);

    if (!resultadoValidacao.success) {
      setErrors(resultadoValidacao.errors);
      return;
    } else {
      if (formData.nome === "ana") {
        setError(""); // Limpa erro anterior
        setErrors({}); // Limpa os erros se a validação for bem-sucedida
        setSuccessMessage("Formulário enviado com sucesso!");
        setTimeout(() => {
          setFormData({
            nomeCompleto: "",
            telefone: "",
            email: "",
            cep: "",
            endereco: "",
            cidade: "",
            uf: "",
            cargo: "",
            experiencia: "",
            numero: "",
            bairro: "",
            complemento: "",
            escolaridade: "",
          });
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrors({});
        setSuccessMessage("");
        setError("Erro ao envia formulário");
      }
    }
  };

  return (
    <div className="trabalhe-conosco-container">
      <div className="trabalhe-box">
        <h2>Trabalhe Conosco</h2>
        <form name="trabalhe-form" onSubmit={handleSubmit}>
          <div className="trabalhe-input-group">
            <label htmlFor="nomeCompleto">Nome</label>
            <input
              id="nomeCompleto"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
              className={errors.nomeCompleto ? "input-error" : ""}
              aria-required="true"
              aria-describedby={
                errors.nomeCompleto ? "error-nomeCompleto" : undefined
              }
            ></input>
            {errors.nomeCompleto && (
              <p id="erro-nomeCompleto" className="error-message" role="alert">
                {errors.nomeCompleto}
              </p>
            )}
          </div>
          <div className="trabalhe-input-group">
            <label htmlFor="telefone">Telefone</label>
            <MaskedInput
              mask={[
                "(",
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              id="telefone"
              name="telefone"
              placeholder="(99) 9999-9999"
              value={formData.telefone}
              onChange={handleChange}
              className={errors.telefone ? "input-error" : ""}
              aria-required="true"
              aria-describedby={errors.telefone ? "erro-telefone" : undefined}
            />
            {errors.telefone && (
              <p id="erro-telefone" className="error-message" role="alert">
                {errors.telefone}
              </p>
            )}
          </div>

          {[
            // { label: "Nome", name: "nomeCompleto", type: "text" },
            //{ label: "Telefone", name: "telefone", type: "text" },
            { label: "Email", name: "email", type: "text" },
            { label: "CEP", name: "cep", type: "text" },
            { label: "Endereço", name: "endereco", type: "text" },
            { label: "Número", name: "numero", type: "text" },
            { label: "Complemento", name: "complemento", type: "text" },
            { label: "Bairro", name: "bairro", type: "text" },
            { label: "Cidade", name: "cidade", type: "text" },
            { label: "UF", name: "uf", type: "text" },
            { label: "Escolaridade", name: "escolaridade", type: "text" },
            { label: "Cargo", name: "cargo", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="trabalhe-input-group" key={name}>
              <label htmlFor={name}>{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={errors[name] ? "input-error" : ""}
                aria-required="true"
                aria-describedby={errors[name] ? `error-${name}` : undefined}
              />
              {errors[name] && (
                <p id="erro-mensagem" className="error-message" role="alert">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}

          <div className="trabalhe-input-group">
            <label htmlFor="experiencia">Experiência</label>
            <textarea
              id="experiencia"
              name="experiencia"
              value={formData.experiencia}
              onChange={handleChange}
              className={errors.experiencia ? "input-error" : ""}
              aria-required="true"
              aria-describedby={
                errors.experiencia ? "error-experiencia" : undefined
              }
            ></textarea>
            {errors.experiencia && (
              <p id="erro-experiencia" className="error-message" role="alert">
                {errors.experiencia}
              </p>
            )}
          </div>

          <div className="trabalhe-button">
            <button className="btn-submit" type="submit">
              Enviar
            </button>
            <button
              className="btn-reset"
              type="button"
              onClick={() => {
                setFormData({
                  nomeCompleto: "",
                  telefone: "",
                  email: "",
                  cep: "",
                  endereco: "",
                  cidade: "",
                  uf: "",
                  cargo: "",
                  experiencia: "",
                  numero: "",
                  bairro: "",
                  complemento: "",
                  escolaridade: "",
                });
                setError("");
                setErrors({});
                setSuccessMessage("");
              }}
            >
              Limpar
            </button>
          </div>
          {/* Mensagem de erro de envio */}
          {error && (
            <p
              id="erro-trabalhe"
              className="error-message"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </p>
          )}

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
}
