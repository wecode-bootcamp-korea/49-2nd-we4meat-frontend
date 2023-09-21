import React from 'react';

function Product({ children }) {
  return (
    <div>
      <li>{children}</li>
    </div>
  );
}

export default Product;
