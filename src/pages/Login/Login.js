import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import LoginForm from './LoginForm/LoginForm';
import EasyLogin from '../../components/EasyLogin/EasyLogin';
import './Login.scss';

const Login = () => {
  return (
    <main id="main" className="login">
      <div className="inner-wrap">
        <PageTitle title="로그인" />
        <LoginForm />
        <section className="find-info">
          <Link to="/">아이디 / 비밀번호 찾기</Link>
        </section>
        <EasyLogin />
        <section className="optional-notice">
          <span>정육각이 처음이신가요?</span>
          <Link to="/">회원가입하기</Link>
        </section>
      </div>
    </main>
  );
};

export default Login;
