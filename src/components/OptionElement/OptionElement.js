import React from 'react';
import './OptionElement.scss';

const ROAST_OPTION = ['보통(16mm)', '얇게(11mm)', '두껍(24mm)'];
const FRY_OPTION = ['보통(11mm)', '두껍(24mm)'];

const OptionElement = props => {
  const { category, scale } = props;

  if (category === '구이용') {
    return (
      <div className="category-wrap" scale={scale}>
        <div className="option-img-wrap" scale={scale}>
          <p className="first-option" scale={scale}>
            보통(16mm)
          </p>
          <img
            src={process.env.PUBLIC_URL + '/images/expand-arrow.png'}
            alt="expand-arrow"
          />
        </div>
        <ul scale={scale}>
          {ROAST_OPTION.map(roastOption => {
            return (
              <li key={roastOption} scale={scale}>
                {roastOption}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (category === '돈까스용') {
    return (
      <div className="category-wrap" scale={scale}>
        <div className="option-img-wrap" scale={scale}>
          <p className="first-option" scale={scale}>
            보통(11mm)
          </p>
          <img
            src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
            alt="expand-arrow"
          />
        </div>
        <ul scale={scale}>
          {FRY_OPTION.map(fryOption => {
            return (
              <li key={fryOption} scale={scale}>
                {fryOption}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (category === '제육용') {
    return (
      <div className="category-wrap" scale={scale}>
        <div className="option-img-wrap" scale={scale}>
          <p className="first-option" scale={scale}>
            제육용
          </p>
          <img
            src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
            alt="expand-arrow"
          />
        </div>
        <ul scale={scale}>
          <li scale={scale}>제육용</li>
        </ul>
      </div>
    );
  } else if (category === '수육용') {
    return (
      <div className="category-wrap" scale={scale}>
        <div className="option-img-wrap" scale={scale}>
          <p className="first-option" scale={scale}>
            수육용
          </p>
          <img
            src={process.env.PUBLIC_URL + './images/expand-arrow.png'}
            alt="expand-arrow"
          />
        </div>
        <ul scale={scale}>
          <li scale={scale}>수육용</li>
        </ul>
      </div>
    );
  }
};

export default OptionElement;
