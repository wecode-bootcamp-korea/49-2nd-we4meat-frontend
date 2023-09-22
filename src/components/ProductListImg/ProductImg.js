import React from 'react';
import { Link } from 'react-router-dom';
import './ProductImg.scss';

function ProductImg({ className }) {
  return (
    <div className={`product-img ${className}`}>
      <Link to="/">
        <img src="/images/pig.png" alt="삼겹살" />
      </Link>
    </div>
  );
}

export default ProductImg;

//props
//className: [string]'product-img'
