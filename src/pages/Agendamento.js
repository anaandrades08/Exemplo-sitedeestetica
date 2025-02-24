import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Servico.css";

const localizer = momentLocalizer(moment);

function Agendamento() {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [msgServico, setMsgServico] = useState("");
  const [agendamentoHabilitado, setAgendamentoHabilitado] = useState(false);

  useEffect(() => {
    const servico = location.hash.replace("#", "");
    setServicoSelecionado(servico);

    const servicosValidos = {
      depilacao: "Você está agendando serviço de Depilação!",
      massagem: "Você está agendando serviço de Massagem!",
      facial: "Você está agendando serviço de Tratamento Facial!",
      manicure: "Você está agendando serviço de Manicure e Pedicure!",
      cabelo: "Você está agendando serviço de Cabeleireiro!",
    };

    if (servicosValidos[servico]) {
      setMsgServico(servicosValidos[servico]);
      setAgendamentoHabilitado(true);
    } else {
      setMsgServico(`O serviço "${servico}" não foi encontrado!`);
      setAgendamentoHabilitado(false);
    }
  }, [location]);

  const handleSelectSlot = ({ start, end }) => {
    if (!agendamentoHabilitado) return;
    const title = window.prompt("Digite o nome do cliente:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="servico-page">
      <h1>Agendamento</h1>
      {msgServico && <h2>{msgServico}</h2>}

      {agendamentoHabilitado ? (
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
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Agendamento não disponível para este serviço.
        </p>
      )}
    </div>
  );
}

export default Agendamento;
