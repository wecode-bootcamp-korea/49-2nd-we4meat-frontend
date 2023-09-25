import React from 'react';
import Button from '../../components/Button/Button';
import './EasyLogin.scss';

const EasyLogin = props => {
  const { title } = props;

  return (
    <section className="easy-login">
      <h3 className="page-subtitle" tabIndex={0}>
        {title}
      </h3>
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
