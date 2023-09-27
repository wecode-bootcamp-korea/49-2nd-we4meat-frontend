import React from 'react';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductText.scss';

function ProductText({ className, title, price, weight }) {
  return (
    <div className={`product-text ${className}`}>
      <ProductTitle title={title} />
      <ProductInfo price={price} weight={weight} />
    </div>
  );
}

export default ProductText;

//props
////className: [string]'product-text'
