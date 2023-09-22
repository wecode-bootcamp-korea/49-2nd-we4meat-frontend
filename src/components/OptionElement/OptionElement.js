import React from 'react';
import './OptionElement.scss';

const OptionElement = props => {
  const { category, text } = props;

  if (category === '구이용') {
    return (
      <ul category={category}>
        <li>보통(16mm)</li>
        <li>얇게(11mm)</li>
        <li>두껍(24mm)</li>
      </ul>
    );
  } else if (category === '돈까스용') {
    return (
      <ul category={category}>
        <li>보통(11mm)</li>
        <li>두껍(24mm)</li>
      </ul>
    );
  } else if (category === '제육용') {
    return (
      <ul>
        <li>제육용</li>
      </ul>
    );
  } else if (category === '수육용') {
    return (
      <ul>
        <li>수육용</li>
      </ul>
    );
  }
};

export default OptionElement;
