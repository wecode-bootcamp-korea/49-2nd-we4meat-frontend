import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ProcessNav from '../../components/ProcessNav/ProcessNav';
import './Pay.scss';

const Pay = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  let totalPrice = null;
  if (location.state != null) {
    totalPrice = location.state.totalPrice;
  }

  const backPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch('/data/userInfoMock.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data[0]);
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
                <td>{userInfo.name}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>전화번호</th>
                <td>{userInfo.userPhone}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{userInfo.userEmail}</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>{userInfo.address}</td>
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
            onClick={() => navigate('/pay-coupon', { state: { totalPrice } })}
          />
        </div>
      </section>
    </div>
  );
};

export default Pay;
