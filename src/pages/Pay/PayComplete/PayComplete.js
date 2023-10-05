import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './PayComplete.scss';

const PayComplete = () => {
  const navigation = useNavigate();

  return (
    <div className="complete-wrap">
      <img src={process.env.PUBLIC_URL + '/images/complete.png'} alt="완료" />
      <h5>주문이 완료되었습니다.</h5>
      <Button
        color="bg-black"
        name="메인으로 가기"
        onClick={() => navigation('/')}
      />
    </div>
  );
};

export default PayComplete;
