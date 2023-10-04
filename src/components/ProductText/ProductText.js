import React from 'react';
import { Link } from 'react-router-dom';
import ProductTitle from '../ProductTitle/ProductTitle';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductText.scss';

function ProductText({ id, title, price, weight }) {
  return (
    <div className="product-text">
      <Link to={`/detail/${id - 1}`}>
        <ProductTitle title={title} />
        <ProductInfo price={price} weight={weight} />
      </Link>
    </div>
  );
}

export default ProductText;
