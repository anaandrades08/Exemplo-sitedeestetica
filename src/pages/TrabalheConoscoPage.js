import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import "../css/TrabalheConosco.css";
import { validarFormularioTrabalheConosco } from "../validation/validationTrabalheConosco";

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    genero: "",
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
    curriculo: "",
  });

  const fields = [
    { label: "Nome", name: "nomeCompleto", type: "text" },
    {
      label: "CPF",
      name: "cpf",
      type: "text",
      mask: [
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ],
    },
    {
      label: "Data de Nascimento",
      name: "dataNascimento",
      type: "text",
      mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    },
    { label: "Gênero", name: "genero", type: "select" },
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
    { label: "Email", name: "email", type: "text" },
    {
      label: "CEP",
      name: "cep",
      type: "text",
      mask: [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/],
    },
    { label: "Endereço", name: "endereco", type: "text" },
    { label: "Número", name: "numero", type: "text" },
    { label: "Complemento", name: "complemento", type: "text" },
    { label: "Bairro", name: "bairro", type: "text" },
    { label: "Cidade", name: "cidade", type: "text" },
    { label: "UF", name: "uf", type: "text" },
    { label: "Escolaridade", name: "escolaridade", type: "select" },
    { label: "Cargo", name: "cargo", type: "select" },
    { label: "Experiência", name: "experiencia", type: "textarea" },
  ];

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null);
  const newErrors = { ...errors }; // Cria uma cópia do estado de erros para evitar mutação direta

  const buscarCEP = async (cep) => {
    // Remove caracteres não numéricos
    const cepNumerico = cep.replace(/\D/g, "");

    // Verifica se o CEP tem 8 dígitos
    if (cepNumerico.length !== 8) return;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepNumerico}/json/`
      );
      const data = await response.json();

      if (!data.erro) {
        setFormData((prevData) => ({
          ...prevData,
          endereco: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          uf: data.uf || "",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          cep: "CEP não encontrado",
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        cep: "Erro ao buscar CEP",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setErrors({}); // Limpa erro dos inputs anterior
    setError(""); // Limpa mensagem de erro de envio anterior
    setSuccessMessage(""); // Limpa sucesso anterior

    // Valida arquivo
    if (name === "curriculo") {
      const uploadedFile = files ? files[0] : null;
      if (uploadedFile && !["application/pdf"].includes(uploadedFile.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          curriculo: "Arquivo inválido. Por favor, envie um PDF.",
        }));
      } else {
        setFile(uploadedFile);
        setErrors((prevErrors) => ({
          ...prevErrors,
          curriculo: "", // Limpa erro de arquivo
        }));
      }
    }

    // Verifica se o CEP possui 9 caracteres
    if (name === "cep" && value.length === 9) {
      buscarCEP(value);
    }

    // Atualiza os dados do formulário
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      // Verifica se o arquivo foi selecionado

      if (formData.cep && formData.length === 9) {
        buscarCEP(value);
      }

      if (formData.nomeCompleto === "ana") {
        setError(""); // Limpa erro anterior
        setErrors({}); // Limpa os erros se a validação for bem-sucedida
        setSuccessMessage("Formulário enviado com sucesso!");
        setTimeout(() => {
          setFormData({
            nomeCompleto: "",
            cpf: "",
            dataNascimento: "",
            genero: "",
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
            curriculo: "",
          });

          setFile(null); // Limpar o arquivo
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
          {fields.map(({ label, name, type, mask }) => (
            <div className="trabalhe-input-group" key={name}>
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
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                />
              ) : name === "genero" ? (
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                >
                  {/* Opções de escolaridade, adicione as opções que achar necessário */}
                  <option value="">-----</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Assistente">Assistente</option>
                  <option value="Prefiro não dizer">Prefiro não dizer</option>
                </select>
              ) : name === "escolaridade" ? (
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                >
                  {/* Opções de escolaridade, adicione as opções que achar necessário */}
                  <option value="">-----</option>
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio_incompleto">
                    Ensino Médio Incompleto
                  </option>
                  <option value="medio">Ensino Médio</option>
                  <option value="superior_incompleto">
                    Ensino Superior Incompleto
                  </option>
                  <option value="superior">Ensino Superior</option>
                  <option value="pos_graduacao">Pós-Graduação</option>
                </select>
              ) : name === "cargo" ? (
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={errors[name] ? "input-error" : ""}
                  aria-required="true"
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                >
                  {/* Opções de escolaridade, adicione as opções que achar necessário */}
                  <option value="">-----</option>
                  <option value="Administrativo">Administrativo</option>
                  <option value="Analista TI">Analista TI</option>
                  <option value="Assistente">Assistente</option>
                  <option value="Cabelereiro">Cabelereiro</option>
                  <option value="Depilador(a)">Depilador(a)</option>
                  <option value="Esteticista">Esteticista</option>
                  <option value="Limpeza">Limpeza</option>
                  <option value="Maquiador(a)">Maquiador(a)</option>
                  <option value="Manicure">Manicure</option>
                  <option value="Massagista">Massagista</option>
                  <option value="Massoterapeuta">Massoterapeuta</option>
                  <option value="Podologia">Podologia</option>
                  <option value="Recepcao">Recepção</option>
                  <option value="Outro">Outro</option>
                </select>
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
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
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
                  aria-describedby={errors[name] ? `error-${name}` : undefined}
                  readOnly={name === "cidade" || name === "uf"} // Torna Cidade e UF somente leitura
                />
              )}
              {/* Mensagem de erro do campo */}
              {errors[name] && (
                <p id="erro-mensagem" className="error-message" role="alert">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}

          {/* Div de file */}
          <div className="trabalhe-input-group">
            <label htmlFor="curriculo" className="custom-file-upload">
              Enviar Currículo
            </label>
            <input
              type="file"
              id="curriculo"
              name="curriculo"
              value={formData.curriculo}
              accept=".pdf"
              onChange={handleChange}
            />
            {file && (
              <p className="file-name">Arquivo selecionado: {file.name}</p>
            )}
            {errors.curriculo && (
              <p id="erro-file" className="error-message" role="alert">
                {errors.curriculo}
              </p>
            )}
          </div>

          {/* Div de botões */}
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
                  cpf: "",
                  dataNascimento: "",
                  genero: "",
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
                  curriculo: "",
                });
                setFile(null); // Limpar o arquivo
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
              id="erro-form"
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
