import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Estilos do calendário
import "../css/Servico.css"; // Importe o CSS
import ManicureImage from "../images/pedicure.jpg"; // Importe a imagem

// Configuração do moment para o calendário
const localizer = momentLocalizer(moment);

function ServicoManicurePage() {
  // Estado para armazenar os eventos do calendário
  const [events, setEvents] = useState([]);

  // Função para adicionar um novo evento ao calendário
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Digite o nome do cliente:");
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="servico-page">
      <h1>Manicure e Pedicure</h1>
      <p>Cuidados profissionais para suas mãos e pés.</p>

      {/* Detalhes do Serviço */}
      <div className="servico-detalhes">
        <img src={ManicureImage} alt="Manicure e Pedicure" />
        <div className="descricao">
          <h2>O que oferecemos?</h2>
          <ul>
            <li>Manicure tradicional e esmaltação em gel.</li>
            <li>Pedicure com higienização completa.</li>
            <li>Hidratação e tratamento para cutículas.</li>
            <li>Designs personalizados e tendências de cores.</li>
            <li>Produtos de alta qualidade e seguros para a saúde.</li>
          </ul>
        </div>
      </div>

      {/* Calendário de Agendamento */}
      <div className="calendario-agendamento">
        <h2>Agende seu horário</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          defaultView="week"
          views={["week", "day"]}
          min={new Date(0, 0, 0, 9, 0, 0)} // Horário de início (9h)
          max={new Date(0, 0, 0, 18, 0, 0)} // Horário de término (18h)
          style={{ height: 500, margin: "20px 0" }}
        />
      </div>

      {/* Botão de Agendamento */}
      <a href="#contato" className="agendamento-button">
        Agendar Manicure/Pedicure
      </a>
    </div>
  );
}

export default ServicoManicurePage;
