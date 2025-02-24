import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificação simples (você pode substituir isso por uma API real)
    //  if (username === "admin" && password === "admin123") {
    //    history.push("/dashboard"); // Redireciona para a página de dashboard
    //  } else {
    //    setError("Nome de usuário ou senha inválidos.");
    //  }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
