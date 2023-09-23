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
            <Product
              key={product.id}
              category_id={product.category_id}
              inventory_id={product.inventory_id}
              product_name={product.product_name}
              product_img={product.product_img}
              price={product.price}
              weight={product.weight}
            >
              <ProductContent />
              <ProductText />
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
