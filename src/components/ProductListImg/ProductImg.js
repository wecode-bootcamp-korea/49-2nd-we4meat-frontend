import React from 'react';
import { Link } from 'react-router-dom';
import './ProductImg.scss';

function ProductImg(props) {
  const { img } = props;

  return (
    <div className="product-img">
      <Link Linkto="/">
        <img src={img} alt="삼겹살" />
      </Link>
    </div>
  );
}

export default ProductImg;

//props
//className: [string]'product-img'
