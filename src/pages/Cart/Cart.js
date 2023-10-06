import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CartOrder from './CartOrder/CartOrder';
import Button from '../../components/Button/Button';
import { API } from '../../config';
import './Cart.scss';

const deliveryFee = 3500;

const Cart = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const totalPriceNDelivery = totalPrice + deliveryFee;
  const navigate = useNavigate();
  const location = useLocation();
  const [result, setResult] = useState([]);

  let productId = null;
  let quantity = null;

  if (location.state != null) {
    const { productId, quantity } = location.state;
  }

  useEffect(() => {
    fetch(`${API.CART}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error('오류입니다.');
      })
      .then(data => {
        setOrderInfo(data.data);
      });
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
    // if (productId === null || quantity === null) {
    //   const array = orderInfo.map(item => ({
    //     productId: item.productId,
    //     quantity: item.quantity,
    //   }));

    //   fetch(`${API.CART}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       authorization: localStorage.getItem('accessToken'),
    //     },
    //     body: JSON.stringify({
    //       products: array,
    //     }),
    //   })
    //     .then(res => {
    //       if (res.ok === true) {
    //         return res.json();
    //       }
    //       throw new Error('오류입니다.');
    //     })
    //     .then(result => {
    //       if (result.message === 'CART_UPDATED') {
    //         navigate('/pay', { state: { totalPriceNDelivery } });
    //         console.log('clear');
    //         console.log(result);
    //       } else {
    //         alert('다시 시도해주세요.');
    //       }
    //     });
    // } else if (productId !== null) {
    //   fetch(`${API.CART}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       authorization: localStorage.getItem('accessToken'),
    //     },
    //     body: JSON.stringify({
    //       products: [{ productId: productId, quantity: quantity }],
    //     }),
    //   })
    //     .then(res => {
    //       if (res.ok === true) {
    //         return res.json();
    //       }
    //       throw new Error('오류입니다.');
    //     })
    //     .then(result => {
    //       if (result.message === 'CART_UPDATED') {
    //         navigate('/pay', { state: { totalPrice } });
    //         console.log('clear222');
    //       } else {
    //         alert('다시 시도해주세요.');
    //       }
    //     });
    // }

    fetch(`${API.ORDER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        totalPrice: totalPriceNDelivery,
      }),
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error('오류입니다.');
      })
      .then(result => {
        console.log(result);
        if (result.message === 'ORDER_CREATED') {
          setResult(result?.data);
          // const index = result?.data.length - 1;
          // const indexFinal = result?.data[index];
          // const num = indexFinal?.orderId;
          // setOrderId(num);
          // console.log(num, orderId);
          // navigate('/pay', {
          //   state: { grandFinal: totalPriceNDelivery, orderId: orderId },
          // });

          aaa();
        } else {
          alert('다시 시도해주세요.');
        }
      });
  };

  const targetIndex = result?.length - 1;
  const targetOrderId = result[targetIndex]?.orderId;

  const aaa = () => {
    setOrderId(targetOrderId);
  };

  console.log(orderId);

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
              orderInfo?.map((order, index) => {
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
