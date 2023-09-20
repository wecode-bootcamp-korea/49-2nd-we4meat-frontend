import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  const themeSwitcher = e => {
    const wrap = document.getElementById('outer-wrap');
    e.target.checked
      ? wrap.setAttribute('theme', 'darkTheme')
      : wrap.setAttribute('theme', 'lightTheme');
  };

  return (
    <div id="outer-wrap" theme="lightTheme">
      <div className="inner-wrap">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <input id="theme-switcher" type="checkbox" onClick={themeSwitcher} />
      </div>
    </div>
  );
};

export default Router;
