import React, { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import { API } from '../../../../config';
import './CouponBox.scss';

const CouponBox = props => {
  const { name, text, point } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const wallet = userInfo.credit;
  const [changewallet, setChangewallet] = useState(wallet);

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
        setChangewallet(data.data[0].credit);
      });
  }, [changewallet]);

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

  return (
    <div className="coupon-box-wrap">
      <div className="text-wrap">
        <h4>{name}</h4>
        {text && <p>{text}</p>}
        {point && (
          <div className="point-use-wrap">
            <span>사용가능 적립금: {changewallet?.toLocaleString()}원</span>
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
            />
          )}
        </>
      )}
    </div>
  );
};

export default CouponBox;
