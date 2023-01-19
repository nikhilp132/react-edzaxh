import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [fName, updatefName] = useState('');
  const [lName, updatelName] = useState('');
  const [fullName, updateFullName] = useState('');

  const getInput1Txt = (event) => {
    updatefName(event.target.value);
  };

  const getInput2Txt = (event) => {
    updatelName(event.target.value);
  };

  const getFullName = (event) => {
    event.preventDefault();
    var fullName = `${fName} ${lName}`;
    updateFullName(fullName);
  };

  return (
    <form onSubmit={getFullName}>
      <div className="formContent">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your First name"
          onChange={getInput1Txt}
          value={fName}
        />
        <input
          type="text"
          placeholder="Enter your Last name"
          onChange={getInput2Txt}
          value={lName}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
