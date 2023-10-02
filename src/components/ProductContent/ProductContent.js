import React from 'react';
import Tag from '../Tag/Tag';
import ProductImg from '../ProductListImg/ProductImg';
import CartButton from '../CartButton/CartButton';
import './ProductContent.scss';

function ProductContent({ className, img, inventory, title }) {
  return (
    <div
      className={`product-content ${className} ${
        inventory === 2 ? 'inventory' : ''
      }`}
    >
      {title.includes('무항g생제') ? <Tag /> : ''}
      <ProductImg img={img} />
      <CartButton />
    </div>
  );
}

export default ProductContent;
//props
//className: [string]'product-content','inventory' - 상품준비중 class
