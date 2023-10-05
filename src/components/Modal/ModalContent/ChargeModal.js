import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const ChargeModal = ({ title, wallet }) => {
  const [pointChange, setPointChange] = useState(0);

  const handlePoint = e => {
    setPointChange(e.target.value);
  };

  const numWallet = parseInt(wallet) + parseInt(pointChange);
  const pointCharge = () => {
    // fetch('http://url', {
    //   method: 'PATCH',
    //   body: JSON.stringify(
    //    numWallet
    console.log(numWallet);
    //     ),
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization: localStorage.getItem('token'),
    //   },
    // })
    //   .then(res => {
    //     if (res.ok === true) {
    //       return res.json();
    //     }
    //     throw new Error('오류입니다.');
    //   })
    //   .then();
  };
  return (
    <div className="charge-modal">
      <h1 tabIndex={0}>{title}</h1>
      <Input
        type="number"
        className="point-input-wrap"
        placeholder="충전 할 포인트를 입력하세요."
        onChange={handlePoint}
      />
      <Button
        name="충전하기"
        full="full"
        color="bg-gray"
        onClick={pointCharge}
      />
    </div>
  );
};

export default ChargeModal;
