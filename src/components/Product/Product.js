import React from 'react';
import './Product.scss';

function Product({ children, className }) {
  return <li className={`product ${className}`}>{children}</li>;
}

export default Product;
//props
//className: [string]'product'
