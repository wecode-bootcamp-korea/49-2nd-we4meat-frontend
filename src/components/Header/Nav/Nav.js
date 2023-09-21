import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  const { text, className, nav } = props;

  return (
    <li className={className}>
      <Link to={`/${nav}`}>{text}</Link>
    </li>
  );
};

export default Nav;
