import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CouponBox from '../../Pay/PayCoupon/CouponBox/CouponBox';
import Button from '../../../components/Button/Button';
import ProcessNav from '../../../components/ProcessNav/ProcessNav';
import { API } from '../../../config';
import './PayCoupon.scss';

const PayCoupon = () => {
  // const [payment, setPayment] = useState(0);
  const navigation = useNavigate();
  const location = useLocation();
  const backPage = () => {
    navigation(-1);
  };

  let grandFinal = null;
  if (location.state != null) {
    grandFinal = location.state.grandFinal;
  }

  let orderId = null;
  if (location.state != null) {
    orderId = location.state.orderId;
  }

  console.log(orderId, grandFinal);
  // let totalPrice = null;
  // if (location.state != null) {
  //   totalPrice = location.state.totalPrice.totalPrice;
  // }

  // useEffect(() => {
  //   fetch(`${API.PAYMENT}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: localStorage.getItem('accessToken'),
  //     },
  //   })
  //     .then(res => {
  //       if (res.ok === true) {
  //         return res.json();
  //       }
  //       throw new Error('오류입니다.');
  //     })
  //     .then(result => {
  //       if (result.message === 'Payments available') {
  //         setPayment(result.Reserve_balance);
  //       }
  //       console.log('함수 안됨');
  //     });
  // }, []);

  return (
    <div className="coupon-contents-wrap">
      <h1>주문하기</h1>
      <ProcessNav />
      <section className="coupon-inner-wrap">
        <div className="box-wrap">
          <CouponBox name="쿠폰" text="쿠폰을 선택해주세요" />
          <CouponBox name="적립금" point="point-use" />
        </div>
        <div className="btn-wrap">
          <Button
            color="bg-gray"
            full="full"
            name="이전 단계"
            onClick={backPage}
          />
          <Button
            color="bg-black"
            full="full"
            name="다음 단계"
            onClick={() =>
              navigation('/pay-last', {
                state: { state: { grandFinal: grandFinal, orderId: orderId } },
              })
            }
          />
        </div>
      </section>
    </div>
  );
};

export default PayCoupon;
