import React from 'react';
import './ProductInfo.scss';

function ProductInfo({ price, weight, className }) {
  return (
    <div>
      <span className={`product-info ${className}`}>
        기준가 {price}원/{weight}g
      </span>
    </div>
  );
}

export default ProductInfo;
//props
//price: [string] 가격
//weight: [string] 중량
////className: [string]'product-info'
