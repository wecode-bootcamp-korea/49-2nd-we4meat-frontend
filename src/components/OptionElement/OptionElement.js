import React from 'react';
import './OptionElement.scss';

const OptionElement = props => {
  const { category } = props;

  if (category === '구이용') {
    return (
      <div className="category-wrap">
        <p>보통(16mm)</p>
        <ul category={category}>
          <li>보통(16mm)</li>
          <li>얇게(11mm)</li>
          <li>두껍(24mm)</li>
        </ul>
      </div>
    );
  } else if (category === '돈까스용') {
    return (
      <div className="category-wrap">
        <p>보통(11mm)</p>
        <ul category={category}>
          <li>보통(11mm)</li>
          <li>두껍(24mm)</li>
        </ul>
      </div>
    );
  } else if (category === '제육용') {
    return (
      <div className="category-wrap">
        <p>제육용</p>
        <ul>
          <li>제육용</li>
        </ul>
      </div>
    );
  } else if (category === '수육용') {
    return (
      <div className="category-wrap">
        <p>수육용</p>
        <ul>
          <li>수육용</li>
        </ul>
      </div>
    );
  }
};

export default OptionElement;
