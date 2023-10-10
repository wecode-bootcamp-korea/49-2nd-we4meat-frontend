import React, { useState, useEffect } from 'react';
import './CartOrder.scss';

const CartOrder = props => {
  const { id, item, img, weight, count, unitPrice, handleMinus, handlePlus } =
    props;
  const oneTotal = count * unitPrice;
  // const [totalPrice, setTotalPrice] = useState();

  return (
    <li key={id}>
      <ul className="my-order-info">
        <li className="item-img">
          {!item === null ? (
            <img
              src={process.env.PUBLIC_URL + img}
              alt={item}
              className="img-size-wrap"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + '/images/pig.png'}
              alt="기본이미지"
              className="img-size-wrap"
            />
          )}
        </li>
        <li className="option-align">
          {item}
          <span>보통(16mm)</span>
        </li>
        <li className="text-gray">{weight}</li>
        <li>
          <div className="count-wrap">
            <button onClick={handleMinus}>-</button>
            <p className="op-name">{count}</p>
            <button onClick={handlePlus}>+</button>
          </div>
        </li>
        <li className="text-right">{oneTotal.toLocaleString()}</li>
        <li>
          <button>
            <img
              src={process.env.PUBLIC_URL + '/images/close.png'}
              alt="삭제"
              className="button-img-wrap"
            />
          </button>
        </li>
      </ul>
    </li>
  );
};

export default CartOrder;
