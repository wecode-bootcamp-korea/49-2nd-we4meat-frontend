import React, { useState, useEffect } from 'react';
import './CartOrder.scss';

const CartOrder = props => {
  const { id, item, option, weight, count, price } = props;
  const [countNum, setCountNum] = useState(count);

  const handleMinusCount = () => {
    if (countNum === 1) {
      alert('최소 수량입니다.');
    } else {
      setCountNum(countNum - 1);
    }
  };
  const handlePlusCount = () => {
    setCountNum(countNum + 1);
  };

  return (
    <li key={id}>
      <ul className="my-order-info">
        <li className="item-img">
          <img />
        </li>
        <li className="option-align">
          {item}
          <span>{option}</span>
        </li>
        <li className="text-gray">{weight}</li>
        <li>
          <div className="count-wrap">
            <button onClick={handleMinusCount}>-</button>
            <p className="op-name">{countNum}</p>
            <button onClick={handlePlusCount}>+</button>
          </div>
        </li>
        <li className="text-right">{price * countNum}</li>
        <li>
          <button>
            <img
              src={process.env.PUBLIC_URL + '/images/close.png'}
              alt="삭제"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CartOrder;
