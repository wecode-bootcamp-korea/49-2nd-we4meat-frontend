import React from 'react';
import './ProductInfo.scss';

function ProductInfo(props) {
  const { price, weight, className = 'product-info' } = props;
  return (
    <div>
      <span className={className}>
        기준가 {price}원/{weight}g
      </span>
    </div>
  );
}

export default ProductInfo;
