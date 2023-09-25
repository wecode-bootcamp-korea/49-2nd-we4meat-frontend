import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import UserInfoOverview from './UserInfoOverview/UserInfoOverview';
import UserInfoDetail from './UserInfoDetail/UserInfoDetail';
import Pagination from './Pagination/Pagination';
import './Mypage.scss';

const Mypage = () => {
  return (
    <main id="main" className="mypage">
      <div className="inner-wrap">
        <PageTitle title="마이페이지" />
        <UserInfoOverview />
        <UserInfoDetail />
        <Pagination />
      </div>
    </main>
  );
};

export default Mypage;
