import React from 'react';
import './Button.scss';

const Button = props => {
  const {
    type = 'button',
    color,
    full,
    outLine,
    name,
    icon,
    // onClick,
    disabled = false,
  } = props;

  return (
    <>
      <button
        className="btn"
        type={type}
        color={color}
        full={full}
        outLine={outLine}
        name={name}
        icon={icon}
        // onClick={onClick}
        disabled={disabled}
      >
        {icon?.length > 0 && (
          <img src={process.env.PUBLIC_URL + `/${icon}.png`} alt={`${icon}`} />
        )}
        {name}
      </button>
    </>
  );
};

export default Button;
