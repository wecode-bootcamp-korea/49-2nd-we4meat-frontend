import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import ProductContent from '../ProductContent/ProductContent';
import ProductText from '../../components/ProductText/ProductText';
import './Products.scss';

function Products({ className }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <ul className={`products ${className}`}>
        {productList.map(product => {
          return (
            <Product key={product.id}>
              <ProductContent img={product.product_img} />
              <ProductText
                title={product.product_name}
                price={product.price}
                weight={product.weight}
              />
            </Product>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;

//props
//className: [string]'products'
