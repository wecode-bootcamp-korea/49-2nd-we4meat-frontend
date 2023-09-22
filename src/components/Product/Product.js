import React from 'react';
import './Product.scss';

function Product({ children, className = 'product' }) {
  return (
    <div>
      <li className={className}>{children}</li>
    </div>
  );
}

export default Product;
