import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Order from './pages/Order/Order';
import OrderCoupon from './pages/Order/OrderCoupon/OrderCoupon';
import OrderLast from './pages/Order/OrderLast/OrderLast';
// import MypageView from './pages/MypageView/MypageView';
import SkipNavigation from './components/SkipNavigation/SkipNavigation';
import PromotionBanner from './components/PromotionBanner/PromotionBanner';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <SkipNavigation />
      <PromotionBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* <Route path="/mypageView/:id" element={<MypageView />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/order-coupon" element={<OrderCoupon />} />
        <Route path="/order-last" element={<OrderLast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
