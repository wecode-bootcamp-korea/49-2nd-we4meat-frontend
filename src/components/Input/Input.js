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

//props
//type:[string]text, email, password, tel
//className: [string]input, login
//name: [string]userEmail, userPassword, passwordSuccess
//              userName, userPhoneNumber
//placeholder: [string]'아이디(이메일 주소)를 입력하세요', '비밀번호를 입력하세요'
