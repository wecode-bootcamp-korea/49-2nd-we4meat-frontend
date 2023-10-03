import React, { useState, useEffect } from 'react';
import './CartOrder.scss';

const CartOrder = props => {
  const {
    id,
    item,
    img,
    weight,
    count,
    unitPrice,
    price,
    setOneTotalPrice,
    setTotalQuantity,
    index,
  } = props;
  const [countNum, setCountNum] = useState(count);
  const oneTotal = countNum * unitPrice;
  // const [oneTotalPrice, setOneTotalPrice] = useState(price * countNum);
  const [totalPrice, setTotalPrice] = useState();

  // useEffect(() => {
  //   setOneTotalPrice(price * countNum);
  // }, [countNum]);

  const handleMinusCount = () => {
    if (countNum === 1) {
      alert('최소 수량입니다.');
    } else {
      setCountNum(countNum - 1);
      setTotalQuantity(countNum - 1);
      setOneTotalPrice(price - unitPrice);
    }
  };
  const handlePlusCount = () => {
    setCountNum(countNum + 1);
    setTotalQuantity(countNum + 1);
    setOneTotalPrice(price + unitPrice);
  };

  return (
    <li key={id}>
      <ul className="my-order-info">
        <li className="item-img">
          <img src={process.env.PUBLIC_URL + img} alt={item} />
        </li>
        <li className="option-align">
          {item}
          <span>보통(16mm)</span>
        </li>
        <li className="text-gray">{weight}</li>
        <li>
          <div className="count-wrap">
            <button onClick={handleMinusCount}>-</button>
            <p className="op-name">{countNum}</p>
            <button onClick={handlePlusCount}>+</button>
          </div>
        </li>
        <li className="text-right">{oneTotal}</li>
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
