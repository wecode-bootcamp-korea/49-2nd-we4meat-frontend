import React from 'react';
import './Cart.scss';

function Cart(props) {
  const {
    className = 'cart-button',
    type = 'button',
    shape,
    size,
    name,
    disabled,
  } = props;
  return (
    <div className={className}>
      <button
        type={type}
        shape={shape}
        size={size}
        name={name}
        disabled={disabled}
      >
        <img src="/images/cart.png" alt="장바구니" />
      </button>
    </div>
  );
}

export default Cart;
