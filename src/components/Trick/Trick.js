import React from "react";
import './Trick.css';

const Trick = ({ id, name, obstacle, stance, tutorial }) => {
  return (
    <section className="trick-card">
      <p className="trick-name">{stance} {name}</p>
      <p className="trick-obs">Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </section>
  );
};

export default Trick;