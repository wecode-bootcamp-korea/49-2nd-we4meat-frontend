import React from 'react';
import { Link } from 'react-router-dom';
import './LinkGoIcon.scss';

const LinkGoIcon = props => {
  const { iconName, text, scale, nav } = props;

  return (
    <Link to={`/${nav}`} className="icon-wrap">
      <img
        src={process.env.PUBLIC_URL + `/images/${iconName}.png`}
        alt={iconName}
        scale={scale}
      />
      {text}
    </Link>
  );
};

export default LinkGoIcon;
