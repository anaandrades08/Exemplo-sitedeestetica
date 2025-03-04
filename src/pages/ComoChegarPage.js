import React from "react";
import "../css/ComoChegar.css";

export default function ComoChegar() {
  return (
    <div className="como-chegar-container">
      <div className="como-chegar-box">
        <h2>Como Chegar</h2>
        <div className="mapa">
          {/* Aqui você pode embutir um mapa do Google Maps ou outro serviço de mapas */}
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509606!2d144.96305771531188!3d-37.81410797975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c7a3070e61e5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1612280430749!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="endereco">
          <h3>Endereço:</h3>
          <p>Rua Exemplo, 123</p>
          <p>Bairro Exemplo</p>
          <p>Cidade, Estado</p>
          <p>CEP 00000-000</p>
        </div>
        <div className="transporte">
          <h3>Transporte Público:</h3>
          <p>Ônibus: Linhas 1, 2, 3</p>
          <p>Metrô: Estação Exemplo</p>
        </div>
      </div>
    </div>
  );
}
