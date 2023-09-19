import React from 'react';
import Radio from '../Radio/Radio';
import './RadioGroup.scss';

const RadioGroup = props => {
  const { name, defaultChecked } = props;

  return (
    <div className="radio-group">
      <Radio
        name={name}
        value="dawn"
        text="새벽배송"
        defaultChecked={defaultChecked === 'dawn'}
      />
      <Radio
        name={name}
        value="day"
        text="당일배송"
        defaultChecked={defaultChecked === 'day'}
      />
    </div>
  );
};

export default RadioGroup;
