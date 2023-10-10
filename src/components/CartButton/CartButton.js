import React from 'react';
import { ReactComponent as CartIcon } from '../../svg/cart.svg';
import './CartButton.scss';

const CartButton = ({ onClick }) => {
  return (
    <div className="cart-button">
      <button type="button" onClick={onClick}>
        <CartIcon />
      </button>
    </div>
  );
};

export default CartButton;
