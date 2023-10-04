import React, { useState, useEffect } from 'react';
import CountBox from '../../CountBox/CountBox';
import OptionSelectBox from '../../OptionSelectBox/OptionSelectBox';
import Button from '../../Button/Button';

const CartModal = ({
  title,
  price,
  modalHandler,
  modalOpen,
  setModalOpen,
  getQuantity,
  quantity,
}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const handleMinusCount = () => {
    if (count === 1) {
      alert('최소 수량입니다.');
    } else {
      setCount(count - 1);
    }
  };

  const handlePlusCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch('/data/mock.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const totalPrice = (price * count).toLocaleString();

  const setQuantity = () => {
    getQuantity(count);
    setModalOpen(false);
  };

  return (
    <>
      <div className="cart-modal">
        <h1 tabIndex={0}>{title}</h1>
        <CountBox
          scale="full"
          count={count}
          plus={handlePlusCount}
          minus={handleMinusCount}
          text=""
        />
        <OptionSelectBox category="구이용" text="옵션선택" scale="full" />
        <span className="price">{totalPrice}원</span>
      </div>
      <div className="btn-group">
        {/* 장바구니에 담은 후 장바구니 페이지로 이동 */}
        <Button color="bg-gray" name="바로구매" />
        {/* 장바구니에만 담고 현 페이지 유지 */}
        <Button color="bg-black" name="장바구니" onClick={setQuantity} />
      </div>
    </>
  );
};

export default CartModal;
