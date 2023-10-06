import React from 'react';
import './PayBox.scss';

const deliveryFee = 3500;

const PayBox = ({ price, wallet }) => {
  const delivery = Number(price) + deliveryFee;
  const total = Number(price) - deliveryFee;
  const totalNum = Number(total)?.toLocaleString();
  const walletNum = Number(wallet);

  return (
    <div className="pay-box-wrap">
      <ul className="pay-list-wrap">
        <li>
          <h4>총 상품 금액</h4>
          <p>
            {totalNum}
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
          <p className="red-font">
            -
            {walletNum >= delivery
              ? delivery?.toLocaleString()
              : walletNum?.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
        <img src={process.env.PUBLIC_URL + '/images/equal.png'} alt="합산" />
        <li>
          <h4>예상 결제 금액</h4>
          <p>
            {/* 포인트 >= 총합 일때 0 아닐때 총합-포인트 */}
            {walletNum >= delivery
              ? 0
              : (delivery - walletNum)?.toLocaleString()}
            <span className="small-font">원</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PayBox;
