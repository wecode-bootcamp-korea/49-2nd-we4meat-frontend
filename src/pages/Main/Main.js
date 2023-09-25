import React from 'react';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import Products from '../../components/Products/Products';
import ListBanner from './ListBanner/ListBanner';
import './Main.scss';

const Main = () => {
  return (
    <main id="main" className="main">
      <BigBanner />
      <EventBanners />
      <Products />
      {/* 제품 목록 컴포넌트 공간 */}
      <ListBanner />
    </main>
  );
};

export default Main;
