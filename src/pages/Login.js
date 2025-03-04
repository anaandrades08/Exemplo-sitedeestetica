import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

import { validarFormularioLogin } from "../validation/validationLogin";
import "../css/Login.css";

export default function Login() {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [errors, setErrors] = useState({});
  //const [error, setError] = useState("");
  //const [successMessage, setSuccessMessage] = useState("");

  //const history = useHistory();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  // Verificação simples (você pode substituir isso por uma API real)
  //  if (username === "admin" && password === "admin123") {
  //    history.push("/dashboard"); // Redireciona para a página de dashboard
  //  } else {
  //    setError("Nome de usuário ou senha inválidos.");
  //  }
  //  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Função para formulario de llogin
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({}); // Estado para armazenar os erros
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Limpa erro anterior
    setErrors({}); // Limpa erro anterior
    setSuccessMessage(""); // Limpa sucesso anterior

    const validation = validarFormularioLogin(formData);
    if (!validation.success) {
      setErrors(validation.errors); // Atualiza os erros no estado
      return;
    } else {
      if (formData.username === "admin" && formData.password === "admin123") {
        setError(""); // Limpa erro anterior
        setErrors({}); // Limpa os erros se a validação for bem-sucedida
        setSuccessMessage("Login realizado com sucesso...");
        setTimeout(() => {
          setFormData({
            username: "",
            password: "",
          });
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrors({});
        setSuccessMessage("");
        setError("Usuário ou senha inválidos!");
      }
    }
  };

  return (
    <div className="login-container" id="login-container">
      <form
        id="form-login"
        onSubmit={handleLogin}
        aria-labelledby="login-titulo"
      >
        <fieldset>
          <legend>Login</legend>
          {/* username */}
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "input-error" : ""}
                aria-required="true"
                aria-describedby={errors.username ? "erro-username" : undefined}
              />
            </div>
          </div>
          {/* password */}
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
                aria-required="true"
                aria-describedby={errors.password ? "erro-password" : undefined}
              />
            </div>
          </div>
          <div className="login-button-group">
            <button className="login-submit" type="submit" tabIndex="0">
              Entrar
            </button>
            <button
              className="login-reset"
              type="reset"
              onClick={() => {
                setFormData({
                  username: "",
                  password: "",
                });
                setErrors({});
                setError("");
                setSuccessMessage("");
              }}
              tabIndex="1"
            >
              Limpar
            </button>
          </div>
          <div className="messages">
            {errors.username && (
              <p id="erro-username" className="error-message" role="alert">
                {errors.username}
              </p>
            )}
            {errors.password && (
              <p id="erro-password" className="error-message" role="alert">
                {errors.password}
              </p>
            )}
            {error && (
              <p
                id="erro-login"
                className="error-message"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </p>
            )}
            {successMessage && (
              <p
                id="sucesso-login"
                className="sucess-message"
                role="alert"
                aria-live="assertive"
              >
                {successMessage}
              </p>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}
