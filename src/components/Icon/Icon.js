import React from 'react';
import './Icon.scss';
import { useNavigate } from 'react-router-dom';

const Icon = props => {
  const { iconName, text, size, nav } = props;
  const navigate = useNavigate(nav);

  return (
    <button className="iconWrap" onClick={navigate()}>
      <img
        src={process.env.PUBLIC_URL + `/images/${iconName}.png`}
        alt={iconName}
        size={size}
      />
      {text}
    </button>
  );
};

export default Icon;
