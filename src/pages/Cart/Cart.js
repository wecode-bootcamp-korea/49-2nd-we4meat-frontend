import React, { useState, useEffect } from 'react';
import CartOrder from './CartOrder/CartOrder';
import Button from '../../components/Button/Button';
import './Cart.scss';

const deliveryFee = 3500;

const Cart = () => {
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    fetch('/data/orderPayMock.json')
      .then(response => response.json())
      .then(data => {
        setOrderInfo(data);
      });
  }, []);

  const sendOrder = () => {
    fetch('http://10.58.52.104:8000/comments', {
      method: 'PATCH',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error('오류입니다.');
      })
      .then();
  };

  // productId, quantity Back으로 보내주면 됨.
  // method: patch.

  const [oneTotalPrice, setOneTotalPrice] = useState(orderInfo.totalPrice);
  const [totalQuantity, setTotalQuantity] = useState(orderInfo.quantity);
  // const [orderList, setOrderList] = useState();
  // const [orderList, setOrderList] = useState([{customerId: orderInfo.customerId, quantity: orderInfo.quantity}])

  // useEffect(() => {
  //   const orderList = [];
  //   for (let i = 0; i < orderInfo.length; i++) {
  //     orderList.push({
  //       customerId: orderInfo.customerId[i],
  //       quantity: totalQuantity[i],
  //     });
  //   }

  //   console.log(orderList);
  // }, [totalQuantity]);

  useEffect(() => {
    const orderList = Object.keys(orderInfo).map(customerId => ({
      customerId: orderInfo[customerId].customerId,
      quantity: orderInfo[customerId].totalQuantity,
    }));
    console.log(orderList);
  }, [totalQuantity]);

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
            {orderInfo.map((order, index) => {
              return (
                <CartOrder
                  index={index}
                  key={order.customerId}
                  item={order.productName}
                  img={order.productImg}
                  weight={order.weight}
                  count={order.quantity}
                  unitPrice={order.unitPrice}
                  price={order.totalPrice}
                  setOneTotalPrice={setOneTotalPrice}
                  setTotalQuantity={setTotalQuantity}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <div className="total-order-wrap">
            <p className="price-wrap">
              총 상품 금액 <span>21600원</span>
            </p>
            <p className="price-wrap">
              총 배송비<span>{deliveryFee}원</span>
            </p>
            <div className="bottom-wrap">
              <p className="price-align-wrap">
                예상 결제 금액
                <span>21600원</span>
              </p>
              <Button
                color="bg-red"
                full="full"
                name="전체상품 주문하기"
                scale="low"
                onClick={sendOrder}
              />
              <Button
                color="bg-gray"
                full="full"
                name="쇼핑계속하기"
                scale="low"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;
