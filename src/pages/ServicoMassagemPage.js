import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Servico.css";
import MassagemImage from "../images/massagem.jpg"; // Importe a imagem

const localizer = momentLocalizer(moment);

function ServicoMassagemPage() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Digite o nome do cliente:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="servico-page">
      <h1>Serviço de Massagem</h1>
      <p>Relaxamento e bem-estar para o corpo e mente.</p>
      <div className="servico-detalhes">
        <img src={MassagemImage} alt="Massagem" />
        <div className="descricao">
          <h2>O que oferecemos?</h2>
          <ul>
            <li>Massagem relaxante e terapêutica.</li>
            <li>Reflexologia podal.</li>
            <li>Aromaterapia e técnicas para alívio de tensões.</li>
          </ul>
        </div>
      </div>
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
          min={new Date(0, 0, 0, 9, 0, 0)}
          max={new Date(0, 0, 0, 18, 0, 0)}
          style={{ height: 500, margin: "20px 0" }}
        />
      </div>
      <a href="#contato" className="agendamento-button">
        Agendar Massagem
      </a>
    </div>
  );
}

export default ServicoMassagemPage;
