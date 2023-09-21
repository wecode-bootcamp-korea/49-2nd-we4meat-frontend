import React from 'react';
import './Input.scss';

function Input(props) {
  const { type, className, name, placeholder } = props;
  return (
    <label>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
