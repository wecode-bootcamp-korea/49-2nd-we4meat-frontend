import React from 'react';
import Button from '../../../components/Button/Button';
import './CartOrderInfo.scss';

const deliveryFee = 3500;

const CartOrderInfo = () => {
  return (
    <div className="total-order-wrap">
      <p className="price-wrap">
        총 상품 금액 <span>21600원</span>
      </p>
      <p className="price-wrap">
        총 배송비<span>{deliveryFee.toLocaleString()}원</span>
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
        />
        <Button color="bg-gray" full="full" name="쇼핑계속하기" scale="low" />
      </div>
    </div>
  );
};

export default CartOrderInfo;
