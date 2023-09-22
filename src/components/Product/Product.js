import React from 'react';
import './Product.scss';

function Product({ children, className }) {
  return (
    <div>
      <li className={`product ${className}`}>{children}</li>
    </div>
  );
}

export default Product;
//props
//className: [string]'product'
