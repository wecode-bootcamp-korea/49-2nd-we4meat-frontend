import React from 'react';
import './Input.scss';

function Input(props) {
  const { type, name, placeholder } = props;
  console.log(props);
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        //onChange={saveUserInfo}
      />
    </div>
  );
}

export default Input;
