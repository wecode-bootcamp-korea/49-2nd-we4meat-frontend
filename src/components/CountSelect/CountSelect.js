import React from 'react';
import './CountSelect.scss';

const CountSelect = props => {
  const { count, plus, minus, scale } = props;

  return (
    <div className="count-select-wrap">
      <button onClick={minus}>-</button>
      <p className="op-name" scale={scale}>
        {count}
      </p>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default CountSelect;
