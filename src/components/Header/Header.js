import React from 'react';
import './Header.scss';
import Icon from '../Icon/Icon';
import Nav from '../Nav/Nav';
import LoginItemGroup from '../LoginItemGroup/LoginItemGroup';

const Header = () => {
  return (
    <header>
      <div className="headerWrap inner-wrap">
        <div className="leftWrap">
          <Icon iconName="logo-white" text="정사각" size="logo" nav="/login" />
          <ul className="font-big">
            <Nav text="쇼핑하기" />
          </ul>
        </div>
        <div className="rightWrap">
          <LoginItemGroup />
          <Icon iconName="shopping-cart" />
          <Icon iconName="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
