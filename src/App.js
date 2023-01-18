import React, { useState } from 'react';
import './style.css';

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
    </>
  );
};

export default App;
