import React, { useState, useEffect } from 'react';
import CountBox from '../../../components/CountBox/CountBox';
import './CartOrder.scss';

const CartOrder = props => {
  const { count, plus, minus } = props;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/data/orderPayMock.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  return (
    <ul className="cart-order-wrap">
      {userInfo.map(orderInfo => {
        return (
          <li key={orderInfo.id}>
            <ul className="my-order-info">
              <li className="item-img">
                <img />
              </li>
              <li className="option-align">
                {orderInfo.order_item}
                <span>{orderInfo.order_item_option}</span>
              </li>
              <li className="text-gray">{orderInfo.order_weight}</li>
              <li>
                <CountBox
                  scale="small"
                  count={count}
                  plus={plus}
                  minus={minus}
                  text=""
                />
              </li>
              <li className="text-right">
                {orderInfo.order_price.toLocaleString()}
              </li>
              <li>
                <button>
                  <img
                    src={process.env.PUBLIC_URL + '/images/close.png'}
                    alt="삭제"
                  />
                </button>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default CartOrder;
