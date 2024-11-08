import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import QuemSomos from "./components/QuemSomos";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./index.css"; // Importando o CSS
import ValoresCarousel from './components/ValoresCarousel'; // Importe o componente
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Estado para controlar o modo (claro ou escuro)
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar entre os modos
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Aplicando a classe "dark-mode" no body quando o estado de darkMode mudar
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <NavBar toggleDarkMode={toggleDarkMode} /> {/* Passa a função para o NavBar */}
      <Home />
      <QuemSomos />
      <ValoresCarousel /> {/* Aqui é onde o carrossel de valores será exibido */}
      <Servicos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;





