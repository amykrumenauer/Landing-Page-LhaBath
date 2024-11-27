import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ValoresCarousel from './components/ValoresCarousel';
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div>
      <NavBar toggleDarkMode={toggleDarkMode}/>
      <Home />
      <QuemSomos />
      <ValoresCarousel /> 
      <Servicos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;





