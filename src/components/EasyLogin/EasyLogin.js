import React from 'react';
import Button from '../../components/Button/Button';
import './EasyLogin.scss';

const EasyLogin = () => {
  return (
    <section className="easy-login">
      <Button
        icon="sns-talk"
        full="full"
        name="카카오로 시작하기"
        scale="low"
      />
      <Button icon="sns-nav" full="full" name="네이버로 시작하기" scale="low" />
    </section>
  );
};

export default EasyLogin;
