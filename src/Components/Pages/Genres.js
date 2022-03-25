import React from "react";
import "../../App.css";
import "../Styles/Card.css";
import Cards from "./Cards";

function Genres() {
  return (
    <div>
      <div className="genres-container">
        <h1>Genres</h1>
      </div>
      <Cards />
    </div>
  );
}

export default Genres;
