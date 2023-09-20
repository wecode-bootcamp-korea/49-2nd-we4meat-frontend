import React from 'react';
import './Nav.scss';

const Nav = props => {
  const { text, className } = props;

  return (
    <ul>
      <li className={className}>{text}</li>
    </ul>
  );
};

export default Nav;
