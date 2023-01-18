import React, { useState } from 'react';
import './style.css';
import Form from './Form.js';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [currTime, UpdatedTime] = useState(time);

  const UpdateTime = () => {
    let time1 = new Date().toLocaleTimeString();
    UpdatedTime(time1);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h1 className="timer">{currTime}</h1>
      <Form />
    </>
  );
};

export default App;
