import React from 'react';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import Products from '../../components/Products/Products';
import ListBanner from './ListBanner/ListBanner';
import CategoryTab from '../../components/CategoryTab/CategoryTab';

const Main = () => {
  return (
    <main id="main" className="main">
      <BigBanner />
      <EventBanners />
      <CategoryTab />
      <Products />
      {/* 제품 목록 컴포넌트 공간 */}
      <ListBanner />
    </main>
  );
};

export default Main;
