import React, { useState } from 'react';
import './Form.css';

const Form = ({ handleChange }) => {
  const [input, setInput] = useState('');

  const handlingChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(input);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={input}
          onChange={handlingChange}
          placeholder="Random word"
        />
        <button className="btn form-btn" onClick={handleSubmit}>
          DECIDE FOR ME
        </button>
      </form>
    </div>
  );
};

export default Form;
