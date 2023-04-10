import React from "react";
import './Tricks.css';

import Trick from "../Trick/Trick";

const Tricks = ({ tricks }) => {
  const trickItems = tricks.map(trick => <Trick key={trick.id} id={trick.id} name={trick.name} obstacle={trick.obstacle} stance={trick.stance} tutorial={trick.tutorial}/>)

  return (
    <main className="trick-container">
      {trickItems}
    </main>
  );
};

export default Tricks;