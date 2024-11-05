import React from 'react'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>LhaBath</h1>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#por-que-usar">Por que usar o LhaBath?</a>
        <a href="#produtos">Produtos</a>
        <a href="#sobre-nos">Sobre nós</a>
      </div>
    </nav>
  );
};

export default Navbar;
