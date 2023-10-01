import React from 'react';
import { ReactComponent as CartIcon } from '../../svg/cart.svg';
import './CartButton.scss';

const CartButton = () => {
  return (
    <div className="cart-button">
      <button type="button">
        <CartIcon />
      </button>
    </div>
  );
};

export default CartButton;
