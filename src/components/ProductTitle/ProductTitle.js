import React from 'react';
import './ProductTitle.scss';
function ProductTitle({ title }) {
  return (
    <div className="product-title">
      <span>{title}</span>
    </div>
  );
}

export default ProductTitle;
