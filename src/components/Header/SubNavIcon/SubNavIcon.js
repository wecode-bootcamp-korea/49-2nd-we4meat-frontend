import React from 'react';
import './SubNavIcon.scss';

const SubNav = props => {
  const { onClick } = props;

  return (
    <button className="icon-wrap" onClick={onClick}>
      <img
        src={process.env.PUBLIC_URL + '/images/menu.png'}
        alt="사이드 메뉴 아이콘"
      />
    </button>
  );
};

export default SubNav;
