import React from 'react';
// import Tag from '../Tag/Tag';
// import ProductListImg from '../ProductListImg/ProductListImg';
// import Cart from '../Cart/Cart';
// import ProductTitle from '../ProductTitle/ProductTitle';
// import ProductInfo from '../ProductInfo/ProductInfo';
// import Product from '../\bProduct/Product';
import './Products.scss';

function Products(props) {
  return (
    <div>
      {/* <ul>
        <Product>
          <ProductListImg />
          <Cart />
          <ProductTitle />
          <ProductInfo />
          <Tag />
        </Product>
      </ul> */}

      <ul className="product-list">
        <li className="product">
          <div className="content">
            <div className="tag">
              <span>무항생제</span>
            </div>
            <div className="content-image">
              <img src="/images/pig.png" alt="" />
            </div>
            <div className="cart-button">
              <button>
                <img src="/images/cart.png" alt="" />
              </button>
            </div>
          </div>
          <div className="product-text">
            <strong className="product-title">
              초신선 무항생제 돼지 삼겹살 구이용
            </strong>
            <span className="product-info">기준가 22,800원/600g</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Products;
