import React from 'react';
import './Checkbox.scss';

const Checkbox = props => {
  // props
  // name: [String]
  // text: [String]
  const { type = 'checkbox', className = 'checkbox', name, text } = props;

  return (
    <label className="label">
      <input type={type} className={className} name={name} tabIndex={0} />
      <span>{text}</span>
    </label>
  );
};

export default Checkbox;
