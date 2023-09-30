import React from 'react';
import './Button.scss';

const Button = props => {
  const {
    type = 'button',
    color,
    full,
    line,
    name,
    icon,
    scale,
    onClick,
    disabled = false,
  } = props;

  // props
  // type: [String] button, submit
  // color: [String] bg-black, bg-gray, bg-red
  // full: [string] full
  // outline: [string] outLine
  // name: [String] 내부텍스트
  // scale: [string] low
  // disabled: [Boolean]
  // icon: [string] sns-talk, sns-nav, 없으면 ""

  return (
    <button
      className="btn"
      type={type}
      color={color}
      full={full}
      line={line}
      name={name}
      icon={icon}
      scale={scale}
      onClick={onClick}
      disabled={disabled}
    >
      {icon?.length > 0 && (
        <img
          src={process.env.PUBLIC_URL + `/images/${icon}.png`}
          alt={`${icon}`}
        />
      )}
      {name}
    </button>
  );
};

export default Button;
