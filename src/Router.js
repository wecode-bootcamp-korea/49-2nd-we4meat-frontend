import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
