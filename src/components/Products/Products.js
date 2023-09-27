import React, { useState, useEffect } from 'react';
import BestTitle from '../BestTitle/BestTitle';
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
    <section className="products-section">
      <div className="inner-wrap">
        <BestTitle />
        <ul className={`products ${className}`}>
          {productList.map(product => {
            return (
              <Product key={product.id}>
                <ProductContent
                  img={product.product_img}
                  inventory={product.inventory_id}
                  title={product.product_name}
                />
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
    </section>
  );
}

export default Products;

//props
//className: [string]'products'
