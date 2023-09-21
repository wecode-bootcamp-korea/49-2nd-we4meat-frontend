import React from 'react';
import './Icon.scss';
import { useNavigate } from 'react-router-dom';

const Icon = props => {
  const { iconName, text, scale, nav } = props;
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(`${nav}`);
  };

  return (
    <button className="iconWrap" onClick={goToPage}>
      <img
        src={process.env.PUBLIC_URL + `/images/${iconName}.png`}
        alt={iconName}
        scale={scale}
      />
      {text}
    </button>
  );
};

export default Icon;
