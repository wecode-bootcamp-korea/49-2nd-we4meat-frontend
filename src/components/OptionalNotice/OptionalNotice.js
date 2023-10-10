import React from 'react';
import { Link } from 'react-router-dom';
import './OptionalNotice.scss';

const OptionalNotice = () => {
  return (
    <div className="optional-notice">
      <span>정육각이 처음이신가요?</span>
      <Link to="/sign-up">회원가입하기</Link>
    </div>
  );
};

export default OptionalNotice;
