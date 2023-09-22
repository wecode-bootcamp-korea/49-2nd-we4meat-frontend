import React from 'react';
import { Link } from 'react-router-dom';
import './ProductImg.scss';

function ProductImg({ className = 'product-img' }) {
  return (
    <div className={className}>
      <Link to="/">
        <img src="/images/pig.png" alt="삼겹살" />
      </Link>
    </div>
  );
}

export default ProductImg;
