import React, { useState } from 'react';
import CartOrder from './CartOrder/CartOrder';
import CartOrderInfo from './CartOrderInfo/CartOrderInfo';
import './Cart.scss';

const Cart = () => {
  const [count, setCount] = useState(1);
  const handleMinusCount = () => {
    if (count === 1) {
      alert('최소 수량입니다.');
    } else {
      setCount(count - 1);
    }
  };
  const handlePlusCount = () => {
    setCount(count + 1);
  };

  return (
    <section className="cart-wrap">
      <div>
        <h1>장바구니</h1>
      </div>
      <div className="cart-align-wrap">
        <section className="item-info-wrap">
          <ul className="item-label-wrap">
            <li>상품정보</li>
            <li>수량</li>
            <li>가격</li>
          </ul>
          <CartOrder
            count={count}
            plus={handlePlusCount}
            minus={handleMinusCount}
          />
        </section>
        <section>
          <CartOrderInfo />
        </section>
      </div>
    </section>
  );
};

export default Cart;
