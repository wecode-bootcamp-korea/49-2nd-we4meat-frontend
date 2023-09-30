import React from 'react';
import Button from '../../../../components/Button/Button';
import './CouponBox.scss';

const CouponBox = props => {
  const { name, text } = props;
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
      <Button line="line" scale="low" />
    </div>
  );
};

export default CouponBox;
