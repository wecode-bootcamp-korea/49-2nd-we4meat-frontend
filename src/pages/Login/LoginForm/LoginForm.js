import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import './LoginForm.scss';

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInfo;

  const typingSentry = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const emailValidationCheck = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  const passwordValidationCheck = password => {
    if (password.length >= 10) {
      return true;
    }
    return false;
  };

  const isDisabled = !(
    emailValidationCheck(email) && passwordValidationCheck(password)
  )
    ? true
    : false;

  const submitForm = e => {
    e.preventDefault();
    console.log('submit!');
  };

  return (
    <form className="form" onChange={typingSentry} onSubmit={submitForm}>
      <fieldset>
        <legend>이메일 로그인</legend>
        <Input
          type="email"
          name="email"
          className="login"
          placeholder="아이디(이메일 주소)를 입력하세요"
          required
        />
        <Input
          type="password"
          name="password"
          className="login"
          placeholder="비밀번호를 입력하세요"
          required
        />
        <Button
          type="submit"
          full="full"
          name="로그인"
          scale="low"
          disabled={isDisabled}
        />
      </fieldset>
    </form>
  );
};

export default LoginForm;
