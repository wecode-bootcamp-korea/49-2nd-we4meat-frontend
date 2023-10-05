import React, { useEffect, useState } from 'react';
import { API } from '../../../config';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import './LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginComplete, setLoginComplete] = useState(false);
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

  const postUserInfo = e => {
    e.preventDefault();
    // setIsError(false);
    fetch(`${API.LOGIN}`, {
      // 1. 실제 통신 시 POST
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 2. 실제 통신 시 보낼 정보
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('accessToken', result.token);
          // 3. 실제 통신 시 로그인 완료 상태 관리
          setLoginComplete(true);
        }
      });
  };

  // 4. 실제 통신 시 페이지 이동 처리
  useEffect(() => {
    if (loginComplete === true) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginComplete]);

  return (
    <form className="form" onChange={typingSentry} onSubmit={postUserInfo}>
      <fieldset>
        <legend>이메일 로그인</legend>
        <Input
          type="email"
          name="email"
          className="input login"
          placeholder="아이디(이메일 주소)를 입력하세요"
          isValidation={emailValidationCheck(email)}
          required
        />
        <Input
          type="password"
          name="password"
          className="input login"
          placeholder="비밀번호를 입력하세요"
          isValidation={passwordValidationCheck(password)}
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
