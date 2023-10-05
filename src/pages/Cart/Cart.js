import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CartOrder from './CartOrder/CartOrder';
import Button from '../../components/Button/Button';
import './Cart.scss';

const deliveryFee = 3500;

const Cart = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceNDelivery = totalPrice + deliveryFee;
  const navigate = useNavigate();
  const location = useLocation();

  // 바로구매 시 여기서 두 데이터를 꺼내 쓰시면 됩니다.
  // const { productId, quantity } = location.state;

  useEffect(() => {
    fetch('/data/orderPayMock.json')
      .then(response => response.json())
      .then(data => {
        setOrderInfo(data);
      });

    // fetch(`http://10.58.52.104:8000/cart`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization: localStorage.getItem('token'),
    //   },
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     setOrderInfo(data);
    //   });
  }, []);

  const sumTotal = () => {
    const total = orderInfo.reduce((acc, item) => {
      return acc + item.quantity * item.unitPrice;
    }, 0);
    return total;
  };

  useEffect(() => {
    setTotalPrice(sumTotal());
  }, [orderInfo]);

  const handleSubmit = () => {
    const array = orderInfo.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
    // fetch("http://localhost:8000/cart" , {
    //   method: 'PATCH',
    //   body: JSON.stringify(
    //   array
    console.log(array);
    navigate('/pay', { state: { totalPrice } });
    //     ),
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     Authorization: localStorage.getItem('token'),
    //   },
    // })
    //   .then(res => {
    //     if (res.ok === true) {
    //       return res.json();
    //     }
    //     throw new Error('오류입니다.');
    //   })
    //   .then((result)=>
    // if (result.message === 'CART_UPDATED') {
    //   navigate('/pay', { state: { totalPrice } });
    // } else {
    //   alert('다시 시도해주세요.');
    // }
    // );
  };

  const handlePlus = id => {
    const array = [...orderInfo];
    array.map(item => {
      if (item.productId === id) {
        item.quantity = item.quantity + 1;
      }
    });
    setOrderInfo(array);
  };

  const handleMinus = id => {
    const array = [...orderInfo];
    array.map(item => {
      if (item.productId === id) {
        if (item.quantity === 1) {
          alert('최소 수량입니다.');
        } else {
          item.quantity = item.quantity - 1;
        }
      }
    });
    setOrderInfo(array);
  };

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
            {orderInfo.length === 0 ? (
              <li className="none-wrap">장바구니가 비었습니다.</li>
            ) : (
              orderInfo.map((order, index) => {
                return (
                  <CartOrder
                    index={index}
                    key={order.productId}
                    item={order.productName}
                    img={order.productImg}
                    weight={order.weight}
                    count={order.quantity}
                    unitPrice={order.unitPrice}
                    price={order.totalPrice}
                    handleMinus={() => handleMinus(order.productId)}
                    handlePlus={() => handlePlus(order.productId)}
                  />
                );
              })
            )}
          </ul>
        </section>
        <section>
          <div className="total-order-wrap">
            <p className="price-wrap">
              총 상품 금액 <span>{totalPrice?.toLocaleString()}</span>
            </p>
            <p className="price-wrap">
              총 배송비<span>{deliveryFee.toLocaleString()}원</span>
            </p>
            <div className="bottom-wrap">
              <p className="price-align-wrap">
                예상 결제 금액
                <span>{totalPriceNDelivery?.toLocaleString()}</span>
              </p>
              <Button
                color="bg-red"
                full="full"
                name="전체상품 주문하기"
                scale="low"
                onClick={() => handleSubmit()}
              />
              <Button
                color="bg-gray"
                full="full"
                name="쇼핑계속하기"
                scale="low"
                onClick={() => navigate('/list?category=pork')}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;
