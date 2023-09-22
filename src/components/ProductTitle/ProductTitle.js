import React from 'react';
import './ProductTitle.scss';
function ProductTitle({ className = 'product-title' }) {
  return (
    <div className={className}>
      <span>초신선 돼지 삼겹살 구이용</span>
    </div>
  );
}

export default ProductTitle;
