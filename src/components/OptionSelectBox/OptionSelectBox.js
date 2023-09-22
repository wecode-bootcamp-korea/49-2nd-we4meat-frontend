import React, { useState } from 'react';
import OptionElement from '../../components/OptionElement/OptionElement';
import './OptionSelect.scss';

const OptionSelect = props => {
  const { category } = props;

  if (category === '구이용') {
    return (
      <div className="option-select">
        <p>보통(16mm)</p>
        <OptionElement category={category} />
      </div>
    );
  } else if (category === '돈까스용') {
    return (
      <div className="option-select">
        <p>보통(16mm)</p>
        <OptionElement category={category} />
      </div>
    );
  } else if (category === '제육용') {
    return (
      <div className="option-select">
        <p>제육용</p>
        <OptionElement category={category} />
      </div>
    );
  } else if (category === '수육용') {
    return (
      <div className="option-select">
        <p>수육용</p>
        <OptionElement category={category} />
      </div>
    );
  }
};

export default OptionSelect;
