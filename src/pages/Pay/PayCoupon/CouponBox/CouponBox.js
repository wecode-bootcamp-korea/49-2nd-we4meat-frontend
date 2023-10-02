import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import './CouponBox.scss';

const CouponBox = props => {
  const { name, text, point } = props;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/data/userInfoMock.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data[0]);
      });
  }, []);

  return (
    <div className="coupon-box-wrap">
      <div className="text-wrap">
        <h4>{name}</h4>
        {text && <p>{text}</p>}
        {point && (
          <div className="point-use-wrap">
            <span>사용가능 적립금: {userInfo.wallet}원</span>
          </div>
        )}
      </div>
      {name === '쿠폰' ? (
        <Button name="쿠폰 선택" scale="smallest" border="border" />
      ) : (
        <Button name="적립금 충전" scale="smallest" border="border" />
      )}
    </div>
  );
};

export default CouponBox;
