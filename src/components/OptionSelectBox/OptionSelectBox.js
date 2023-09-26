import React, { useState } from 'react';
import OptionElement from '../../components/OptionElement/OptionElement';
import './OptionSelectBox.scss';

const OptionSelect = props => {
  const { category, text, scale } = props;
  const [isPopup, setIsPopup] = useState(false);

  const handleClick = () => {
    setIsPopup(!isPopup);
  };

  // Props
  // category [string] 구이용, 돈까스용, 제육용, 수육용, 요리용, 찌개용
  // text: [string] 옵션, 옵션선택
  // scale: [string] full

  if (category === '구이용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              보통(16mm)
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
        </div>
        {isPopup && <OptionElement category={category} scale={scale} />}
      </div>
    );
  } else if (category === '돈까스용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              보통(11mm)
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
        </div>
        {isPopup && <OptionElement category={category} scale={scale} />}
      </div>
    );
  } else if (category === '제육용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              제육용
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
        </div>
        {isPopup && <OptionElement category={category} scale={scale} />}
      </div>
    );
  } else if (category === '수육용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              수육용
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
          {isPopup && <OptionElement category={category} scale={scale} />}
        </div>
      </div>
    );
  } else if (category === '요리용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              요리용
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
          {isPopup && <OptionElement category={category} scale={scale} />}
        </div>
      </div>
    );
  } else if (category === '찌개용') {
    const isPop = { opacity: isPopup ? 0 : 1 };

    return (
      <div className="option-select" scale={scale}>
        <div className="text-wrap" scale={scale}>
          <p className="text-align" scale={scale}>
            {text}
          </p>
          <div
            className="option-img-wrap"
            scale={scale}
            onClick={handleClick}
            style={isPop}
          >
            <p className="first-option" scale={scale}>
              찌개용
            </p>
            <img
              src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
              alt="expand-arrow"
            />
          </div>
          {isPopup && <OptionElement category={category} scale={scale} />}
        </div>
      </div>
    );
  }
};

export default OptionSelect;
