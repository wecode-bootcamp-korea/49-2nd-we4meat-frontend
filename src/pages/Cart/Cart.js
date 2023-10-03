import React, { useState, useEffect } from 'react';
import CartOrder from './CartOrder/CartOrder';
import CartOrderInfo from './CartOrderInfo/CartOrderInfo';
import './Cart.scss';

const Cart = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const {
    id,
    order_item,
    order_item_option,
    order_weight,
    order_count,
    order_price,
  } = orderInfo;

  useEffect(() => {
    fetch('/data/orderPayMock.json')
      .then(response => response.json())
      .then(data => {
        setOrderInfo(data);
      });
  }, []);

  return (
    <section className="cart-wrap">
      <div>
        <h1>장바구니</h1>
      </div>
      <div className="cart-align-wrap">
        <section className="item-info-wrap">
          <ul className="item-label-wrap">
            <li>상품정보</li>
            <li>수량</li>
            <li>가격</li>
          </ul>
          <ul className="cart-order-wrap">
            {orderInfo.map(order => {
              return (
                <CartOrder
                  key={order.id}
                  item={order.order_item}
                  option={order.order_item_option}
                  weight={order.order_weight}
                  count={order.order_count}
                  price={order.order_price}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <CartOrderInfo />
        </section>
      </div>
    </section>
  );
};

export default Cart;
