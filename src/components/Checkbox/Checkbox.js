import React, { useState } from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  const [checked, setChecked] = useState(false);
  const checkedToggle = e => {
    setChecked(prev => !prev);
  };

  const {
    type = 'checkbox',
    className = 'checkbox',
    name,
    tabIndex = '0',
    text,
  } = props;

  // props
  // - type: checkbox
  // - className: [String] checkbox
  // - name: [String]
  // - tabIndex: [Number]
  // - aria-label: [String]
  // - aria-checked: [Boolean]
  // - onClick: [Function]
  // - text: [String]

  return (
    <>
      <label className="label">
        <input
          type={type}
          className={className}
          name={name}
          tabIndex={tabIndex}
          aria-label={text}
          aria-checked={checked}
          onClick={checkedToggle}
        />
        <span>{text}</span>
      </label>
    </>
  );
};

export default Checkbox;
