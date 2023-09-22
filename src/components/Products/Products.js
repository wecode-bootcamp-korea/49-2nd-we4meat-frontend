import React from 'react';
import Product from '../\bProduct/Product';
import ProductContent from '../ProductContent/ProductContent';
import ProductText from '../../components/ProductText/ProductText';
import './Products.scss';

function Products({ className = 'products' }) {
  return (
    <div>
      <ul className={className}>
        <Product>
          <ProductContent />
          <ProductText />
        </Product>
      </ul>
    </div>
  );
}

export default Products;
