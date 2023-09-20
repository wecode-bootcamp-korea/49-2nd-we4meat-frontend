import React from 'react';
import './LoginGroup.scss';
import Nav from '../Nav/Nav';

const LoginGroup = () => {
  return (
    <ul className="navList">
      <Nav text="공지사항" />
      <Nav text="고객센터" />
      <Nav text="로그인" />
      <Nav text="회원가입" />
    </ul>
  );
};

export default LoginGroup;
