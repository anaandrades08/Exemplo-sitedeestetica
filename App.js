import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./pages/Main.js";
import LoginPage from "./pages/Login.js";
import AgendamentoPage from "./pages/Agendamento.js";
import ComoChegarPage from "./pages/ComoChegarPage.js";
import DepoimentosPage from "./pages/DepoimentosPage.js";
import ServicosPage from "./pages/ServicosPage.js";
import TrabalheConoscoPage from "./pages/TrabalheConoscoPage.js";
//import TrabalheConoscoPage from "./pages/reserva.js";
import ServicoManicurePage from "./pages/ServicoManicurePage";
import ServicoDepilacaoPage from "./pages/ServicoDepilacaoPage";
import ServicoFacialPage from "./pages/ServicoFacialPage";
import ServicoCabeleireiroPage from "./pages/ServicoCabeleireiroPage";
import ServicoMassagemPage from "./pages/ServicoMassagemPage";
import "./css/App.css";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<Main />} /> {/* Página inicial */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/manicure" element={<ServicoManicurePage />} />
          <Route path="/depilacao" element={<ServicoDepilacaoPage />} />
          <Route path="/facial" element={<ServicoFacialPage />} />
          <Route path="/cabelo" element={<ServicoCabeleireiroPage />} />
          <Route path="/massagem" element={<ServicoMassagemPage />} />
          <Route path="/agenda" element={<AgendamentoPage />} />
          <Route path="/trabalhe" element={<TrabalheConoscoPage />} />
          <Route path="/comochegar" element={<ComoChegarPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/depoimentos" element={<DepoimentosPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
