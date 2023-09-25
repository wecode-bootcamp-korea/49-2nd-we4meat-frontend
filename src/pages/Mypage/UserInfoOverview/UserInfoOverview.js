import React from 'react';
import './UserInfoOverview.scss';

const UserInfoOverview = () => {
  const USER_RANK = [
    {
      rank: 'VIP',
      path: "process.env.PUBLIC_URL + '/images/mypage/rank_vip.png",
      text: 'VIP 등급 회원',
    },
    {
      rank: '골드',
      path: "process.env.PUBLIC_URL + '/images/mypage/rank_gold.png",
      text: '골드 등급 회원',
    },
    {
      rank: '실버',
      path: "process.env.PUBLIC_URL + '/images/mypage/rank_silver.png",
      text: '실버 등급 회원',
    },
    {
      rank: '웰컴',
      path: "process.env.PUBLIC_URL + '/images/mypage/rank_welcome.png",
      text: '웰컴 등급 회원',
    },
  ];
  return (
    <section className="user-info-overview">
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/mypage/rank_welcome.png'}
          alt="웰컴 등급 회원"
        />
      </div>
      <div>
        <div>
          <h3>Hello, 류창선님</h3>
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
              <td>[웰컴]</td>
              <td>[0원]</td>
              <td>[0개]</td>
              <td>[0건]</td>
              <td>[2309-5471-0258-2018]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserInfoOverview;
