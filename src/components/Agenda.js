import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Servico.css";

const localizer = momentLocalizer(moment);

function Agendamento() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Digite o nome do cliente:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="servico-page">
      <h1>Agenda</h1>
      <p>Agende seu horário...</p>
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
    </div>
  );
}
export default Agendamento;
