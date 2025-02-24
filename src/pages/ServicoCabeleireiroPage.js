import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Servico.css";
import CabeleireiroImage from "../images/cabeleireiro.jpg";

const localizer = momentLocalizer(moment);

function ServicoCabeleireiroPage() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Digite o nome do cliente:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="servico-page">
      <h1>Serviço de Cabeleireiro</h1>
      <p>Cortes, coloração e tratamentos capilares.</p>
      <div className="servico-detalhes">
        <img src={CabeleireiroImage} alt="Cabeleireiro" />
        <div className="descricao">
          <h2>O que oferecemos?</h2>
          <ul>
            <li>Cortes modernos e personalizados.</li>
            <li>Coloração e mechas profissionais.</li>
            <li>Tratamentos para hidratação e reconstrução capilar.</li>
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
        Agendar Cabeleireiro
      </a>
    </div>
  );
}
export default ServicoCabeleireiroPage;
