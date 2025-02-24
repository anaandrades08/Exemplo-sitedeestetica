import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Beleza & Estética. Todos os direitos reservados.</p>
      <div className="redes-sociais">
        <a href="#" aria-label="Instagram">
          Instagram
        </a>
        <a href="#" aria-label="Facebook">
          Facebook
        </a>
        <a href="#" aria-label="WhatsApp">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
