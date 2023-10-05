import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const ChargeModal = ({ title, modalHandler }) => {
  const [pointChange, setPointChange] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const [isValidation, setIsValidation] = useState(true);
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
    // fetch('http://url', {
    //   method: 'PATCH',
    //   body: JSON.stringify(
    //     { credit: pointChange },
    console.log(pointChange);
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
    //     .then(
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
