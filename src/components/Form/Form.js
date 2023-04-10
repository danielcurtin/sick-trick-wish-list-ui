import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = () => {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  return (
    <form>
      <select name='stance' onChange={event => setStance(event.target.value)}>
        <option value='Choose your Stance'>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input type='text' placeholder='Name of Trick' value={name} onChange={event => setName(event.target.value)}></input>
      <select name='obstacle' onChange={event => setObstacle(event.target.value)}>
        <option value='Choose your Obstacle'>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input type='text' placeholder='Link to Tutorial' value={tutorial} onChange={event => setTutorial(event.target.value)}></input>
      <button type='submit'>Send It!</button>
    </form>
  );
};

export default Form;