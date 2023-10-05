import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import './CouponBox.scss';

const CouponBox = props => {
  const { name, text, point } = props;
  const [userInfo, setUserInfo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', close);
  }, []);

  const modalHandler = () => {
    setModalOpen(prev => !prev);
  };

  useEffect(() => {
    fetch('/data/userInfoMock.json')
      .then(response => response.json())
      .then(data => {
        setUserInfo(data[0]);
      });
  }, []);

  const wallet = userInfo.wallet?.toLocaleString();

  return (
    <div className="coupon-box-wrap">
      <div className="text-wrap">
        <h4>{name}</h4>
        {text && <p>{text}</p>}
        {point && (
          <div className="point-use-wrap">
            <span>사용가능 적립금: {wallet}원</span>
          </div>
        )}
      </div>
      {name === '쿠폰' ? (
        <Button name="쿠폰 선택" scale="smallest" border="border" />
      ) : (
        <>
          <Button
            name="적립금 충전"
            scale="smallest"
            border="border"
            onClick={() => setModalOpen(true)}
          />
          {modalOpen && (
            <Modal
              title="충전하기"
              scale="xs"
              isCharge={true}
              modalOpen={modalOpen}
              modalHandler={modalHandler}
              wallet={userInfo.wallet}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CouponBox;
