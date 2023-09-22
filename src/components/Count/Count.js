import React, { useState } from 'react';
import CountSelect from '../CountSelect/CountSelect';
import './Count.scss';

const Count = () => {
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

  return (
    <div className="count-wrap">
      <p>수량</p>
      <CountSelect
        count={count}
        plus={handlePlusCount}
        minus={handleMinusCount}
      />
    </div>
  );
};

export default Count;
