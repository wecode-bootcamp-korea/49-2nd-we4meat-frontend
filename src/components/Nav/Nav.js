import React from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

const Nav = props => {
  const { text, className, nav } = props;
  const navigate = useNavigate(nav);

  return (
    <li className={className} onClick={navigate()}>
      {text}
    </li>
  );
};

export default Nav;
