import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductText.scss';

function ProductText({ className }) {
  return (
    <div className={`product-text ${className}`}>
      <ProductTitle />
      <ProductInfo />
    </div>
  );
}

export default ProductText;

//props
////className: [string]'product-text'
