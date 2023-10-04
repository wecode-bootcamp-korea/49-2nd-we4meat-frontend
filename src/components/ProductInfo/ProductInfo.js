import React from 'react';
import './ProductInfo.scss';

function ProductInfo({ price, weight }) {
  return (
    <div>
      <span className="product-info">
        기준가 {price?.toLocaleString()}원/{weight}g
      </span>
    </div>
  );
}

export default ProductInfo;

//props
//price: [string] 가격
//weight: [string] 중량
