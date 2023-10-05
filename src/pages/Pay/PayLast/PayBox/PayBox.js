import React from 'react';
import './PayBox.scss';

const deliveryFee = 3500;

const PayBox = ({ price, wallet }) => {
  const delivery = price + deliveryFee;

  return (
    <div className="pay-box-wrap">
      <ul>
        <li>
          <h4>총 상품 금액</h4>
          <p>
            {price?.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
        <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt="더하기" />
        <li>
          <h4>배달비</h4>
          <p>
            {deliveryFee.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
        <img src={process.env.PUBLIC_URL + '/images/plus.png'} alt="더하기" />
        <li>
          <h4>쿠폰/적립금</h4>
          <p>
            -
            {wallet >= delivery
              ? delivery?.toLocaleString()
              : wallet?.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
        <img src={process.env.PUBLIC_URL + '/images/equal.png'} alt="합산" />
        <li>
          <h4>예상 결제 금액</h4>
          <p className="red-font">
            {delivery?.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PayBox;
