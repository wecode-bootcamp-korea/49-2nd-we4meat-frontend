import React from 'react';
import './ProductTitle.scss';
function ProductTitle({ className }) {
  return (
    <div className={`product-title ${className}`}>
      <span>초신선 돼지 삼겹살 구이용</span>
    </div>
  );
}

export default ProductTitle;

//props
//className: [string]'product-title'
