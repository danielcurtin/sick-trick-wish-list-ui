import react, { useState, useEffect } from 'react';
import './App.css';
import getTricks from '../../apiCalls';

import Tricks from '../Tricks/Tricks';

const App = () => {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    getTricks()
    .then(res => setTricks(res))
    .catch(() => setError(true));
  }, [])


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {tricks.length && <Tricks tricks={tricks}/>}
    </div>
  );
}

export default App;