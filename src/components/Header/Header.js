import React from 'react';
import './Header.scss';
import Icon from './Icon/Icon';
import Nav from './Nav/Nav';
import LoginItemGroup from './LoginItemGroup/LoginItemGroup';
import SubNav from './SubNav/SubNav';

const Header = () => {
  return (
    <header>
      <div className="headerWrap inner-wrap">
        <div className="leftWrap">
          <Icon iconName="logo-white" text="정사각" scale="big" nav="" />
          <ul>
            <Nav text="쇼핑하기" scale="big" />
          </ul>
        </div>
        <div className="rightWrap">
          <LoginItemGroup />
          <Icon iconName="shopping-cart" nav="" />
          <SubNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
