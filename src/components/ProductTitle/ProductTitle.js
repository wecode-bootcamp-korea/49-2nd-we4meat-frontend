import React from 'react';
import './ProductTitle.scss';
function ProductTitle({ className, title }) {
  return (
    <div className={`product-title ${className}`}>
      <span>{title}</span>
    </div>
  );
}

export default ProductTitle;

//props
//className: [string]'product-title'
