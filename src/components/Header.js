import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // Fecha o menu ao clicar em qualquer link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fecha o menu ao redimensionar para mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container-header">
        {/* Logo */}
        <div className="logo">
          <h1>
            <Link to="/" onClick={() => scrollToSection("destaque")}>
              Beleza e Estética
            </Link>
          </h1>
        </div>
        {/* Navegação */}
        <div className="nav-container">
          <nav>
            {/* Menu Principal para Desktop */}
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => scrollToSection("sobre")}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToSection("servicos")}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToSection("depoimentos")}>
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToSection("contato")}>
                  Contato
                </Link>
              </li>
            </ul>

            {/* Botão para Menu Lateral em Desktop */}
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={toggleMenu}
            >
              ☰
            </button>

            {/* Menu Lateral para Desktop */}
            <ul className={`nav-links-left ${menuOpen ? "open" : ""}`}>
              <li>
                <Link to="/" onClick={() => scrollToSection("destaque")}>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/agenda">Agendamento</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/depoimentos">Depoimentos</Link>
              </li>
              <li>
                <Link to="/comochegar">Como Chegar</Link>
              </li>
              <li>
                <Link to="/trabalhe">Trabalhe Conosco</Link>
              </li>
              <li>
                <Link to="/login">Área Restrita</Link>
              </li>
            </ul>

            {/* Overlay para fechar o menu */}
            {menuOpen && <div className="overlay" onClick={toggleMenu} />}
          </nav>

          {/* Menu Horizontal para Mobile */}
          <ul className="nav-links-left">
            <li>
              <Link to="/" onClick={() => scrollToSection("destaque")}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/depoimentos">Depoimentos</Link>
            </li>
            <li>
              <Link to="/comochegar">Como Chegar</Link>
            </li>
            <li>
              <Link to="/trabalhe">Trabalhe Conosco</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
