import React from 'react';
import './CartButton.scss';

function CartButton({ className, type = 'button' }) {
  return (
    <div className={`cart-button ${className}`}>
      <button type={`button ${type}`}>
        <img src="/images/cart.png" alt="장바구니" />
      </button>
    </div>
  );
}

export default CartButton;
