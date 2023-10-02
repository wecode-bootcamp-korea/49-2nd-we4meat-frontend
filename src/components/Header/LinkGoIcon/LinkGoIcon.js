import React from 'react';
import { Link } from 'react-router-dom';
import './LinkGoIcon.scss';

const LinkGoIcon = props => {
  const { icon, text, scale, path } = props;

  return (
    <Link to={`/${path}`} className="icon-wrap">
      <img
        src={process.env.PUBLIC_URL + `/images/${icon}.png`}
        alt={icon}
        data-scale={scale}
      />
      {text}
    </Link>
  );
};

export default LinkGoIcon;
