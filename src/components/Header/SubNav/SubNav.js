import React from 'react';
import './SubNav.scss';

const SubNav = () => {
  return (
    <button className="icon-wrap" onClick>
      <img
        src={process.env.PUBLIC_URL + '/images/menu.png'}
        alt="사이드 메뉴 아이콘"
      />
    </button>
  );
};

export default SubNav;
