import React, { useState } from 'react';
import './style.css';

const Form = () => {
  // const [fName, updatefName] = useState('');
  // const [lName, updatelName] = useState('');
  const [fullName, updateFullName] = useState({
    fName: '',
    lName: '',
  });

  // const getInput1Txt = (event) => {
  //   updatefName(event.target.value);
  // };

  // const getInput2Txt = (event) => {
  //   updatelName(event.target.value);
  // };

  const getInputTxt = (event) => {
    console.log(event.target.value);

    updateFullName((currValue) => {
      if (event.target.name == 'fName') {
        fName = event.target.value;
        lName = currValue.lName;
      } else {
        fName = currValue.fName;
        lName = event.target.value;
      }
    });
  };

  const getFullName = (event) => {
    event.preventDefault();
    // var fullName = `${fName} ${lName}`;
    // updateFullName(fullName);
  };

  return (
    <form onSubmit={getFullName}>
      <div className="formContent">
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <input
          type="text"
          placeholder="Enter your First name"
          onChange={getInputTxt}
          name="fName"
          value={fullName.fName}
        />
        <input
          type="text"
          placeholder="Enter your Last name"
          onChange={getInputTxt}
          name="lName"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
