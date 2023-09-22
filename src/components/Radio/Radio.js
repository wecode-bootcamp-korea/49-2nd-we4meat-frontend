import React from 'react';
import './Radio.scss';

const Radio = props => {
  // props
  // name: [String]
  // value: [String]
  // text: [String]
  // defaultChecked: [String]
  const {
    type = 'radio',
    className = 'radio',
    name,
    value,
    text,
    defaultChecked,
  } = props;

  return (
    <label className="label">
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        tabIndex={0}
      />
      <span>{text}</span>
    </label>
  );
};

export default Radio;
