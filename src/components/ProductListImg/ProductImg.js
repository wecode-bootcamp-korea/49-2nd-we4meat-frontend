import React from 'react';
import { Link } from 'react-router-dom';
import './ProductImg.scss';

function ProductImg({ id, img, title }) {
  return (
    <div className="product-img">
      <Link to={`/detail/${id - 1}`}>
        <img src={img} alt={title} />
      </Link>
    </div>
  );
}

export default ProductImg;

//props
//className: [string]'product-img'
