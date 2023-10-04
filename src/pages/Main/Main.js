import React from 'react';
import { useLocation } from 'react-router-dom';
import BigBanner from './BigBanner/BigBanner';
import EventBanners from './EventBanners/EventBanners';
import Products from '../../components/Products/Products';
import ListBanner from './ListBanner/ListBanner';

const Main = () => {
  const location = useLocation();
  const { id, count } = location.state;

  console.log(id, count);

  return (
    <main id="main" className="main">
      <BigBanner />
      <EventBanners />
      <Products />
      <ListBanner />
    </main>
  );
};

export default Main;
