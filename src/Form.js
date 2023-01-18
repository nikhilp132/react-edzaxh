import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [currName, UpdatedName] = useState('');
  const [fullName, fullNewName] = useState(currName);

  const getInputValue = (event) => {
    var currentName = event.target.value;
    UpdatedName(currentName);
  };

  const updateValue = () => {
    fullNewName(currName);
  };

  return (
    <div className="formContent">
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={getInputValue}
        value={currName}
      />
      <button onClick={updateValue}>Submit</button>
    </div>
  );
};

export default Form;
