import React from 'react';
import { useNavigate } from 'react-router-dom';
import CouponBox from '../../Pay/PayCoupon/CouponBox/CouponBox';
import Button from '../../../components/Button/Button';
import ProcessNav from '../../../components/ProcessNav/ProcessNav';
import './PayCoupon.scss';

const PayCoupon = () => {
  const navigation = useNavigate();
  const backPage = () => {
    navigation(-1);
  };

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
            onClick={() => navigation('/pay-last')}
          />
        </div>
      </section>
    </div>
  );
};

export default PayCoupon;
