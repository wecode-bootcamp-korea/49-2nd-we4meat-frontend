import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API } from '../../config';
import Loading from '../../pages/Loading/Loading';
import BestTitle from '../BestTitle/BestTitle';
import Product from '../Product/Product';
import ProductContent from '../ProductContent/ProductContent';
import ProductText from '../../components/ProductText/ProductText';
import './Products.scss';

function Products(props) {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { getQuantity, quantity, best } = props;

  useEffect(() => {
    setLoading(true);
    getProductsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  let api_path;
  if (best) {
    api_path = `${API.LIST}?category=beef`;
  } else {
    api_path = `${API.LIST}?category=${category}`;
  }

  const getProductsData = () => {
    // fetch(`${API.LIST}?category=${category}`, {
    fetch(api_path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setLoading(false);
        setProductList(result?.data);
      });
  };

  return (
    <section className="products-section">
      <div className="inner-wrap">
        <BestTitle />
        {loading && <Loading />}
        <ul className="products">
          {productList?.map(product => {
            return (
              <Product key={product.productId}>
                <ProductContent
                  id={product.productId}
                  img={product.productImg}
                  // inventory={product.inventory_id}
                  title={product.productName}
                  price={product.price}
                  getQuantity={getQuantity}
                  quantity={quantity}
                />
                <ProductText
                  id={product.productId}
                  title={product.productName}
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
