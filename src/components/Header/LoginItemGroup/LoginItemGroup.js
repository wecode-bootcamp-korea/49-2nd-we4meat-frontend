import React from 'react';
import Nav from '../Nav/Nav';
import './LoginItemGroup.scss';

const linkList = ['공지사항', '고객센터', '로그인', '회원가입'];

const LoginItemGroup = () => {
  return (
    <ul className="login-list">
      {linkList.map(link => {
        return <Nav key={link} text={link} />;
      })}
    </ul>
  );
};

export default LoginItemGroup;
