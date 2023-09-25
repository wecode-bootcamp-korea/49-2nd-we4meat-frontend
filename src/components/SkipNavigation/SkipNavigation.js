import React from 'react';
import './SkipNavigation.scss';

const SkipNavigation = () => {
  return (
    <section className="skip-navigation">
      <ul>
        <li>
          <a href="#main">본문 바로가기</a>
        </li>
        <li>
          <a href="#menu-list">메뉴 바로가기</a>
        </li>
      </ul>
    </section>
  );
};

export default SkipNavigation;
