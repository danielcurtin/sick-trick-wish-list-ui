import React, { useState } from 'react';
import './Form.css';

const Form = ({ addTrick }) => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  const submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      stance: stance,
      name: name,
      obstacle: obstacle,
      tutorial: tutorial
    };
    addTrick(newTrick);
    clearInputs();
  };

  const clearInputs = () => {
    setStance('');
    setName('');
    setObstacle('');
    setTutorial('');
  };

  return (
    <form>
      <select name='stance' value={stance} onChange={event => setStance(event.target.value)}>
        <option value='Choose your Stance'>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input type='text' name='trick name' placeholder='Name of Trick' value={name} onChange={event => setName(event.target.value)}></input>
      <select name='obstacle' value={obstacle} onChange={event => setObstacle(event.target.value)}>
        <option value='Choose your Obstacle'>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input type='text' name='tutorial' placeholder='Link to Tutorial' value={tutorial} onChange={event => setTutorial(event.target.value)}></input>
      <button type='submit' onClick={event => submitTrick(event)}>Send It!</button>
    </form>
  );
};

export default Form;