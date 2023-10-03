import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  // props
  // name: [String]
  // text: [String]
  const {
    type = 'checkbox',
    className = 'checkbox',
    name,
    text,
    isChecked,
  } = props;

  return (
    <label className="label">
      <input
        type={type}
        className={className}
        name={name}
        tabIndex={0}
        onChange={isChecked}
      />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
