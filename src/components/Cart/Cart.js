import React from 'react';
import './Cart.scss';

function Cart(props) {
  const { className = 'cart-button', type = 'button', name } = props;
  return (
    <div className={className}>
      <button type={type} name={name}>
        <img src="/images/cart.png" alt="장바구니" />
      </button>
    </div>
  );
}

export default Cart;
