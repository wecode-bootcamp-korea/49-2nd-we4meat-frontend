import React from 'react';
import Nav from '../Nav/Nav';
import './LoginItemGroup.scss';

const LINK_LIST = [
  // { id: 1, text: '공지사항', path: '' },
  // { id: 2, text: '고객센터', path: '' },
  { id: 1, text: '로그인', path: '/login' },
  { id: 2, text: '회원가입', path: '/sign-up' },
];

const isLogin = localStorage.getItem('accessToken');

const LoginItemGroup = () => {
  return (
    <ul className="login-list">
      {!isLogin ? (
        LINK_LIST.map(link => {
          return <Nav key={link.id} text={link.text} path={link.path} />;
        })
      ) : (
        <Nav text="마이페이지" path="mypage" />
      )}
    </ul>
  );
};

export default LoginItemGroup;
