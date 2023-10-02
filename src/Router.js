import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Pay from './pages/Pay/Pay';
import PayCoupon from './pages/Pay/PayCoupon/PayCoupon';
import PayLast from './pages/Pay/PayLast/PayLast';
import PayComplete from './pages/Pay/PayComplete/PayComplete';
// import MypageView from './pages/MypageView/MypageView';
import Order from './pages/Order/Order';
import SkipNavigation from './components/SkipNavigation/SkipNavigation';
import PromotionBanner from './components/PromotionBanner/PromotionBanner';
import Header from './components/Header/Header';
import TopButton from './components/TopButton/TopButton';
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
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay-coupon" element={<PayCoupon />} />
        <Route path="/pay-last" element={<PayLast />} />
        <Route path="/pay-complete" element={<PayComplete />} />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
      <TopButton />
    </BrowserRouter>
  );
};

export default Router;
