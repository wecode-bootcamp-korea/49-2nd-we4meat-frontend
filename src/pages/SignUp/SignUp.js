import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import './SignUp.scss';

function SignUp(props) {
  return (
    <div className="sign-up">
      <div className="inner-wrap">
        <h2 className="title">회원가입</h2>
        <UserInfo />
      </div>
    </div>
  );
}

export default SignUp;
