import React from 'react';
import './Input.scss';

function Input(props) {
  const { type, className = 'input', name, placeholder } = props;
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        //onChange={saveUserInfo}
      />
    </>
  );
}

export default Input;
