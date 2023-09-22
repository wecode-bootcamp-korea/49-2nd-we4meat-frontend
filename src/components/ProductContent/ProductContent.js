import React from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import CartButton from '../CartButton/CartButton';
import './ProductContent.scss';

function ProductContent({ className }) {
  return (
    <div className={`product-content ${className}`}>
      <Tag />
      <ProductImg />
      <CartButton />
    </div>
  );
}

export default ProductContent;
//props
//className: [string]'product-content','inventory' - 상품준비중 class
