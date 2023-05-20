// Imports
import React from "react";
import "./Header.css";

function Header(props) {
  const { nome, cargo, foto } = props.informacoes;

  return (
    <header>
      <img src={foto} alt="image" />
      <h1 id="nome">{nome}</h1>
      <h3 id="nome">{cargo}</h3>
    </header>
  );
}

export default Header;
