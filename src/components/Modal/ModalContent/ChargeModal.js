import React, { useState, useEffect } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

const ChargeModal = ({ title }) => {
  return (
    <div className="charge-modal">
      <h1 tabIndex={0}>{title}</h1>
      <Input
        type="number"
        className="point-input-wrap"
        placeholder="충전 할 포인트를 입력하세요."
      />
      <Button name="충전하기" full="full" color="bg-gray" />
    </div>
  );
};

export default ChargeModal;
