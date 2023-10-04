import React, { useEffect, useState } from 'react';
import './UserInfoOverview.scss';

const UserInfoOverview = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    fetch('/data/userInfoMock.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data[0]);
      });
  };

  const { rank, name, wallet, coupon, buy, userNumber } = userInfo;

  return (
    <section className="user-info-overview">
      <div>
        <img
          src={process.env.PUBLIC_URL + `/images/mypage/rank_${rank}.png`}
          alt={`${rank} 등급 회원`}
        />
      </div>
      <div>
        <div>
          <h3>Hello, {name}님</h3>
          <button type="button">로그아웃</button>
        </div>
        <table>
          <caption className="hidden">회원 정보 테이블</caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>회원등급</th>
              <th>월렛</th>
              <th>쿠폰</th>
              <th>구매</th>
              <th>회원번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[{rank?.toUpperCase()}]</td>
              <td>[{wallet?.toLocaleString()}원]</td>
              <td>[{coupon}개]</td>
              <td>[{buy}건]</td>
              <td>[{userNumber}]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserInfoOverview;
