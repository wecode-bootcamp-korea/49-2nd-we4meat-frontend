import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductText.scss';

function ProductText({ className = 'Product-text' }) {
  return (
    <div className={className}>
      <ProductTitle />
      <ProductInfo />
    </div>
  );
}

export default ProductText;
