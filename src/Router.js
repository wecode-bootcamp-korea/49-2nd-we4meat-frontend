import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import PromotionBanner from './components/PromotionBanner/PromotionBanner';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <div id="outer-wrap" theme="lightTheme">
      <BrowserRouter>
        <PromotionBanner />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
