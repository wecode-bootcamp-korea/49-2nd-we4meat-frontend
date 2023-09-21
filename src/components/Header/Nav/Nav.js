import React from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

const Nav = props => {
  const { text, className, scale, nav } = props;
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(`/${nav}`);
  };

  return (
    <li className={className}>
      <button type="button" scale={scale} onClick={goToPage}>
        {text}
      </button>
    </li>
  );
};

export default Nav;
