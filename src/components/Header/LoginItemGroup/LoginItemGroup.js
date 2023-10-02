import React from 'react';
import Nav from '../Nav/Nav';
import './LoginItemGroup.scss';

const LINK_LIST = [
  { id: 1, text: '공지사항', path: '' },
  { id: 2, text: '고객센터', path: '' },
  { id: 3, text: '로그인', path: '/login' },
  { id: 4, text: '회원가입', path: '' },
];

const LoginItemGroup = () => {
  return (
    <ul className="login-list">
      {LINK_LIST.map(link => {
        return <Nav key={link.id} text={link.text} path={link.path} />;
      })}
    </ul>
  );
};

export default LoginItemGroup;
