import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ProcessNav from '../../components/ProcessNav/ProcessNav';
import { API } from '../../config';
import './Pay.scss';

const Pay = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  let grandFinal = null;
  if (location.state != null) {
    grandFinal = location.state.grandFinal;
  }

  let orderId = null;
  if (location.state != null) {
    orderId = location.state.orderId;
  }

  const backPage = () => {
    navigate(-1);
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
      .then(result => {
        setUserInfo(result?.data[0]);
      });
  }, []);

  return (
    <div className="order-wrap">
      <h1>주문하기</h1>
      <ProcessNav />
      <section className="order-inner-wrap">
        <div className="order-table-wrap">
          <table>
            <caption>주문 정보</caption>
            <thead>
              <tr>
                <th>이름</th>
                <td>{userInfo?.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>전화번호</th>
                <td>{userInfo?.phoneNumber}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{userInfo?.name}@naver.com</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>{userInfo?.address}</td>
              </tr>
            </tbody>
          </table>
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
              navigate('/pay-coupon', {
                state: { grandFinal: grandFinal, orderId: orderId },
              })
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Pay;
