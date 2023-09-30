import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CouponBox from './CouponBox/CouponBox';
import Button from '../../../components/Button/Button';
import './OrderCoupon.scss';

const OrderCoupon = () => {
  // const [userInfo, setUserInfo] = useState([]);
  const navigation = useNavigate();
  const backPage = () => {
    navigation(-1);
  };

  // useEffect(() => {
  //   fetch('/data/userInfoMock.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setUserInfo(data[0]);
  //     });
  // }, []);

  return (
    <div className="order-wrap">
      <h1>주문하기</h1>
      {/* 주문 상태 component */}
      <section className="order-inner-wrap">
        <CouponBox />
        <div className="btn-wrap">
          <Button
            color="bg-gray"
            full="full"
            name="이전 단계"
            onClick={backPage}
          />
          <Button color="bg-black" full="full" name="다음 단계" />
        </div>
      </section>
    </div>
  );
};

export default OrderCoupon;
