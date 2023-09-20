import React from 'react';
import './LoginItem.scss';

const LoginItem = props => {
  const { name } = props;

  return (
    <button type="button" name={name}>
      {name}
    </button>
  );
};

export default LoginItem;
