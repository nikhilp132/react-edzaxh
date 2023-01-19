import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [currName, UpdatedName] = useState('');
  const [fullName, fullNewName] = useState(currName);

  const getInputValue = (event) => {
    var currentName = event.target.value;
    UpdatedName(currentName);
  };

  const updateValue = (event) => {
    event.preventDefault();
    fullNewName(currName);
  };

  return (
    <form onSubmit={updateValue}>
      <div className="formContent">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your First name"
          onChange={getInputValue}
          value={currName}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
