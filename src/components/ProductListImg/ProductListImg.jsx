import React from 'react';
import { Link } from 'react-router-dom';

function ProductListImg(props) {
  return (
    <Link to="/">
      <img src="/images/pig.png" alt="삼겹살" />
    </Link>
  );
}

export default ProductListImg;
