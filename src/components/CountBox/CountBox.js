import React from 'react';
import './CountBox.scss';

const CountBox = props => {
  const { count, plus, minus, scale, text } = props;
  // 사용하고자 하는 곳에 선언
  // const [count, setCount] = useState(1);
  // const handleMinusCount = () => {
  //   if (count === 1) {
  //     alert('최소 수량입니다.');
  //   } else {
  //     setCount(count - 1);
  //   }
  // };
  // const handlePlusCount = () => {
  //   setCount(count + 1);
  // };

  // Props
  // count: [state]
  // plus: [function] handlePlusCount
  // minus: [function] handleMinusCount
  // scale: [string] full, small
  // text: [string] 입력하고자하는 값, 없으면 ''

  return (
    <div className="count-wrap" scale={scale}>
      {text.length !== 0 && <p>{text}</p>}
      <div className="count-select-wrap" scale={scale}>
        <button scale={scale} onClick={minus}>
          -
        </button>
        <p className="op-name" scale={scale}>
          {count}
        </p>
        <button scale={scale} onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
};

export default CountBox;
