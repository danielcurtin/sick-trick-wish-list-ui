import React, { useState, useEffect } from 'react';
import './App.css';
import { getTricks, postNewTrick } from '../../apiCalls';

import Tricks from '../Tricks/Tricks';
import Error from '../Error/Error';
import Form from '../Form/Form';

const App = () => {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    getTricks()
    .then(res => setTricks(res))
    .catch(() => setError(true));
  }, []);

  const addTrick = (newTrick) => {
    postNewTrick(newTrick)
    .then(res => setTricks([...tricks, res]))
    .catch(() => setError(true))
  };

  if (error) {
    return <Error />
  }
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      {tricks.length && <Tricks tricks={tricks} />}
    </div>
  );
};

export default App;