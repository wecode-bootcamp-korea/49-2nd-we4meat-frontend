import React from 'react';
import { Link } from 'react-router-dom';
import './LinkGoIcon.scss';

const LinkGoIcon = props => {
  const { icon, text, scale, path, quantity } = props;

  return (
    <Link to={`/${path}`} className="icon-wrap">
      <span className="quantity">{quantity}</span>
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
