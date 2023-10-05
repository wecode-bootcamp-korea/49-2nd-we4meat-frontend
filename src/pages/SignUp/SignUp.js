import React from 'react';
import RegisterNav from '../../components/RegisterNav/RegisterNav';
import UserInfo from './UserInfo/UserInfo';
import Button from '../../components/Button/Button';
import './SignUp.scss';

function SignUp(props) {
  return (
    <div className="sign-up">
      <div className="inner-wrap">
        <h2 className="title">회원가입</h2>
        <UserInfo />
        <div className="button-group">
          <Button type="button" color="bg-gray" full="full" name="이전으로" />
          <Button type="submit" full="full" name="가입하기" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
