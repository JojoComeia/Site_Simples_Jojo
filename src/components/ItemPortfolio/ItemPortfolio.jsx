// Imports
import React from "react";
import "./ItemPortfolio.css";

const ItemPortfolio = (props) => {
  return (
    <div className="item-portfolio">
      <a href={props.link} target="_blank">
        <img src={props.image} alt="Capa Comeia Academy" />
        <p>{props.title}</p>
      </a>
    </div>
  );
};

export default ItemPortfolio;
