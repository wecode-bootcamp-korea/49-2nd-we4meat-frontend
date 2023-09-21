import React from 'react';
import './OptionElement.scss';

const OptionElement = props => {
  const { text } = props;

  return <li>{text}</li>;
};

export default OptionElement;
