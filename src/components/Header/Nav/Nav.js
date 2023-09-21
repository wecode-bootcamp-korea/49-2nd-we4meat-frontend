import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
  const { text, className, scale, nav } = props;

  return (
    <li className={className}>
      <Link to={`/${nav}`} scale={scale}>
        {text}
      </Link>
    </li>
  );
};

export default Nav;
