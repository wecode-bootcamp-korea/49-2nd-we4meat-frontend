import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Radio from '../../../components/Radio/Radio';
import PayBox from './PayBox/PayBox';
import Checkbox from '../../../components/Checkbox/Checkbox';
import ProcessNav from '../../../components/ProcessNav/ProcessNav';
import { API } from '../../../config';
import './PayLast.scss';

const PayLast = () => {
  const [orderInfo, setOrderInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isValidation, setIsValidation] = useState(true);
  const [isCheckBox, setIsCheckBox] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  // const orderId = localStorage.getItem(orderId);
  // const { wallet } = userInfo;
  const orderCount = orderInfo.length - 1;
  let grandFinal = null;
  if (location.state != null) {
    grandFinal = location.state.grandFinal;
  }

  let orderId = null;
  if (location.state != null) {
    orderId = location.state.orderId;
  }
  console.log(orderId, grandFinal);

  const backPage = () => {
    navigation(-1);
  };

  const handleIsCheckBox = e => {
    setIsCheckBox(e.target.checked);
  };

  useEffect(() => {
    fetch(`${API.USER}`, {
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
        setUserInfo(data.data[0]);
      });
  }, []);

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
        setOrderInfo(data?.data);
      });
  }, []);

  useEffect(() => {
    if (isCheckBox === true && userInfo?.credit >= grandFinal) {
      setIsValidation(!isValidation);
    } else {
      setIsValidation(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckBox]);

  const handleSubmit = () => {
    fetch(`${API.PAY}`, {
      method: 'PATCH',
      body: JSON
        .stringify
        // { orderId: orderId, total_Credit: totalPrice }
        (),
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
      .then(result => {
        if (result.message === 'paymentComplete') {
          navigation('/pay-complete');
          console.log('clear');
        } else {
          alert('다시 시도해주세요.');
        }
      });
  };

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
              <div className="etc-wrap">
                <ul className="list-order-wrap">
                  <li>
                    {orderInfo[0]?.productName}
                    <span className="small-gray-font">보통(16mm)</span>
                  </li>
                  <li>{orderInfo[0]?.weight}g</li>
                  <li>{orderInfo[0]?.quantity}개</li>
                  <li>{orderInfo[0]?.totalPrice.toLocaleString()}원</li>
                </ul>
                {orderInfo.length !== 1 && (
                  <p className="small-scale-font">…외 {orderCount}개</p>
                )}
              </div>
              <PayBox price={grandFinal} wallet={userInfo?.credit} />
            </div>
            <Checkbox
              text="
결제는 제품 생산 후 진행되며, 실제 생산된 제품의 중량에 따라 금액이 ±10% 변동될 수 있음에 동의합니다. (300g이하 상품의 경우 ±20%)"
              isChecked={e => handleIsCheckBox(e)}
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
            name="결제하기"
            disabled={isValidation}
            onClick={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default PayLast;
