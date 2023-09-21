import React from 'react';
import './Radio.scss';

const Radio = props => {
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
        tab-index="0"
      />
      <span>{text}</span>
    </label>
  );
};

export default Radio;
