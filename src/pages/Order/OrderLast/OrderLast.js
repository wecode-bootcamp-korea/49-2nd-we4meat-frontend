import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Radio from '../../../components/Radio/Radio';
import PayBox from './PayBox/PayBox';
import Checkbox from '../../../components/Checkbox/Checkbox';
import ProcessNav from '../../../components/ProcessNav/ProcessNav';
import './OrderLast.scss';

const OrderCoupon = () => {
  const [orderInfo, setOrderInfo] = useState({});
  const navigation = useNavigate();
  const {
    order_item,
    order_item_option,
    order_weight,
    order_count,
    order_price,
  } = orderInfo;

  const backPage = () => {
    navigation(-1);
  };

  useEffect(() => {
    fetch('/data/orderPayMock.json')
      .then(response => response.json())
      .then(data => {
        setOrderInfo(data[0]);
      });
  }, [order_price]);

  return (
    <div className="order-pay-wrap">
      <h1>주문하기</h1>
      <ProcessNav />
      <section className="pay-inner-wrap">
        <div className="box-wrap">
          <div className="first-box">
            <h2>결제 방법</h2>
            <div className="radio-wrap">
              <Radio text="적립금 결제" defaultChecked="default" />
            </div>
          </div>
          <div className="second-box">
            <h3>주문 상품</h3>
            <div className="order-item-wrap">
              <ul>
                <li>
                  {order_item}
                  <span className="small-gray-font">{order_item_option}</span>
                </li>
                <li>{order_weight}</li>
                <li>{order_count}</li>
                <li>{order_price?.toLocaleString()}원</li>
              </ul>
              <PayBox price={order_price} />
            </div>
            <Checkbox
              text="
결제는 제품 생산 후 진행되며, 실제 생산된 제품의 중량에 따라 금액이 ±10% 변동될 수 있음에 동의합니다. (300g이하 상품의 경우 ±20%)"
            />
          </div>
        </div>
        <div className="btn-wrap">
          <Button
            color="bg-gray"
            full="full"
            name="이전 단계"
            onClick={backPage}
          />
          <Button
            type="submit"
            color="bg-red"
            full="full"
            name="주문하기"
            disabled={true}
          />
        </div>
      </section>
    </div>
  );
};

export default OrderCoupon;
