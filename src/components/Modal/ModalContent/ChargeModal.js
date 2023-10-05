import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const ChargeModal = ({ title, modalHandler }) => {
  const [pointChange, setPointChange] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const [isValidation, setIsValidation] = useState(true);
  const navigate = useNavigate();
  const maxPoint = pointChange > 100000000;
  const minPoint = pointChange > 0;

  const handlePoint = e => {
    const pointNum = parseInt(e.target.value, 10);
    if (pointNum >= 0 && pointNum <= 1000000000) {
      setPointChange(pointNum);
    } else {
      setPointChange('');
    }
  };

  useEffect(() => {
    if (pointChange === 0) {
      setIsAlert(false);
    } else {
      if (maxPoint) {
        setIsAlert(true);
        setIsValidation(true);
      } else if (minPoint) {
        setIsAlert(false);
        setIsValidation(false);
      }
    }
  }, [pointChange]);

  const pointCharge = () => {
    // fetch('http://url/payment/topupcredit', {
    //   method: 'PATCH',
    //   body: JSON.stringify(
    //     {credit : pointChange},
    // console.log(pointChange);
    //     ),
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       Authorization: localStorage.getItem('token'),
    //     },
    //   })
    //     .then(res => {
    //       if (res.ok === true) {
    //         return res.json();
    //       }
    //       throw new Error('오류입니다.');
    //     })
    //     .then((result)=>{
    //   if(result.message === 'WALLET_CHARGED'){
    //      modalHandler();
    //      const wallet = result.data;
    //      navigate('pay-coupon', {state: {wallet}})
    //   }else{
    //     alert('다시 시도해주세요.')
    //   }
    // }

    modalHandler();
    // );
  };

  return (
    <div className="charge-modal">
      <h1 tabIndex={0}>{title}</h1>
      <Input
        type="number"
        className="point-input-wrap"
        placeholder="금액을 입력해주세요."
        value={pointChange}
        onChange={handlePoint}
      />
      {isAlert && (
        <p className="alert-text-wrap">
          최대 충전 가능 금액은 100,000,000원입니다.
        </p>
      )}
      <Button
        name="충전하기"
        full="full"
        color="bg-red"
        disabled={isValidation}
        onClick={pointCharge}
      />
    </div>
  );
};

export default ChargeModal;
