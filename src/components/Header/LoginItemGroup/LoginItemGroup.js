import React from 'react';
import Nav from '../Nav/Nav';
import './LoginItemGroup.scss';

const LoginItemGroup = () => {
  return (
    <ul className="login-list">
      <Nav text="공지사항" />
      <Nav text="고객센터" />
      <Nav text="로그인" className="border-left" nav="login" />
      <Nav text="회원가입" />
    </ul>
  );
};

export default LoginItemGroup;
