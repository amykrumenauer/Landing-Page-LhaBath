import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => <div className="p-6"><h1>Tenha mais gestão e economia com o LhaBath!</h1></div>;
const About = () => <div className="p-6"><h2>Sobre nós</h2></div>;
const Services = () => <div className="p-6"><h2>Serviços que oferecemos</h2></div>;
const Contact = () => <div className="p-6"><h2>Entre em contato conosco</h2></div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

