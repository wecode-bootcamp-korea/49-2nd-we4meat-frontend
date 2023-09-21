import React from 'react';

function ProductInfo(props) {
  const { price, weight } = props;
  return (
    <div>
      <p>
        기준가 {price}원/{weight}g
      </p>
    </div>
  );
}

export default ProductInfo;
