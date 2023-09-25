import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import LoginForm from './LoginForm/LoginForm';
import EasyLogin from '../../components/EasyLogin/EasyLogin';
import OptionalNotice from '../../components/OptionalNotice/OptionalNotice';
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
        <EasyLogin title="SNS 간편 로그인" />
        <OptionalNotice />
      </div>
    </main>
  );
};

export default Login;
