import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Controle do menu lateral
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado do menu
  };

  return (
    <header>
      <nav>
        <div className="logo">Beleza & Estética</div>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => scrollToSection("destaque")}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => scrollToSection("contato")}>
              Contato
            </Link>
          </li>
        </ul>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>

      {/* Menu Lateral */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => scrollToSection("destaque")}>
            Início
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("servicos")}>
            Serviços
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToSection("sobre")}>
            Sobre
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

        <li>
          <Link to="/login">Area Restrita</Link>
        </li>
      </div>
    </header>
  );
}
