import React, { useEffect, useState } from 'react';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Pay from './pages/Pay/Pay';
import PayCoupon from './pages/Pay/PayCoupon/PayCoupon';
import PayLast from './pages/Pay/PayLast/PayLast';
import PayComplete from './pages/Pay/PayComplete/PayComplete';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import SkipNavigation from './components/SkipNavigation/SkipNavigation';
import PromotionBanner from './components/PromotionBanner/PromotionBanner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton/TopButton';
import Terms from './pages/SignUp/Terms/Terms';
import SignUp from './pages/SignUp/SignUp';
import InitializeScroll from './components/InitializeScroll/InitializeScroll';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  const [quantity, setQuantity] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const getAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const getQuantity = num => {
    const changedInt = Number(quantity);
    setQuantity(changedInt + num);
  };

  const abc = Boolean => {
    setIsModal(Boolean);
  };

  return (
    <BrowserRouter>
      <InitializeScroll />
      <SkipNavigation />
      <PromotionBanner />
      <Header quantity={quantity} isModal={isModal} isLogin={isLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <Main best="best" getQuantity={getQuantity} quantity={quantity} />
          }
        />
        <Route
          path="/list"
          element={<List getQuantity={getQuantity} quantity={quantity} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail getQuantity={getQuantity} quantity={quantity} />}
        />
        <Route
          path="/login"
          element={<Login getAccessToken={getAccessToken} />}
        />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/pay-coupon" element={<PayCoupon />} />
        <Route path="/pay-last" element={<PayLast />} />
        <Route path="/pay-complete" element={<PayComplete />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/order/:id"
          element={
            <Order abc={abc} setIsModal={setIsModal} isModal={isModal} />
          }
        />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
      <TopButton />
    </BrowserRouter>
  );
};

export default Router;
