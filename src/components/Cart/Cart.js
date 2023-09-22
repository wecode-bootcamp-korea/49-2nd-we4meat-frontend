import React from 'react';
import './Cart.scss';

function Cart(props) {
  const { className = 'cart-button', type = 'button' } = props;
  return (
    <div className={className}>
      <button type={type}>
        <img src="/images/cart.png" alt="장바구니" />
      </button>
    </div>
  );
}

export default Cart;
