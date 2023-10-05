import React from 'react';
import './Input.scss';

function Input({
  type,
  className,
  name,
  placeholder,
  isValidation,
  value,
  onChange,
  maxLength,
}) {
  return (
    <label className="input-box">
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        data-validation={isValidation}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </label>
  );
}

export default Input;

// props
// type: [string] text, email, password, tel
// className: [string] input, login, sign-up, input-box: label 태그 className
// name: [string] userEmail, userPassword, passwordSuccess, userName, userPhoneNumber
// placeholder: [string] '아이디(이메일 주소)를 입력하세요', '비밀번호를 입력하세요'
// data-validation: [Boolean] true, false
