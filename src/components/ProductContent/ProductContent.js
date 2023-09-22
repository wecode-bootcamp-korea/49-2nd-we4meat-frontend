import React from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import Cart from '../Cart/Cart';
import './ProductContent.scss';

function ProductContent({ className = 'product-content' }) {
  return (
    <div className={className}>
      <Tag />
      <ProductImg />
      <Cart />
    </div>
  );
}

export default ProductContent;
