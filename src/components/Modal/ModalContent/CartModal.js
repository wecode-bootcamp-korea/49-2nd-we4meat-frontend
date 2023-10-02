import React, { useState, useEffect } from 'react';
import CountBox from '../../CountBox/CountBox';
import OptionSelectBox from '../../OptionSelectBox/OptionSelectBox';

const CartModal = () => {
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

  return (
    <div className="cart-modal">
      {data?.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product?.product_name}</h1>
            <CountBox
              scale="full"
              count={count}
              plus={handlePlusCount}
              minus={handleMinusCount}
              text=""
            />
            <OptionSelectBox category="구이용" text="옵션선택" scale="full" />
          </div>
        );
      })}
    </div>
  );
};

export default CartModal;
