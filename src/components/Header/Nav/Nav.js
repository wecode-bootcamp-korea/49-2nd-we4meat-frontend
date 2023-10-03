import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  const { text, className, path } = props;

  return (
    <li className={className}>
      <Link to={path}>{text}</Link>
    </li>
  );
};

export default Nav;
