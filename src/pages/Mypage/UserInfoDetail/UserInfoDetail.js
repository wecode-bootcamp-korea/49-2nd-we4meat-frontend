import React, { useState } from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import PrivacyDetails from '../PrivacyDetails/PrivacyDetails';
import './UserInfoDetail.scss';

const UserInfoDetail = () => {
  const [currentTab, setTab] = useState(0);

  const TAB_DATA = [
    { name: '주문내역', content: <OrderDetails /> },
    { name: '개인정보관리', content: <PrivacyDetails /> },
  ];

  const selectTabHandler = index => {
    setTab(index);
  };

  return (
    <section className="user-info-detail">
      <div className="tabs">
        {TAB_DATA?.map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              className={currentTab === index ? 'selected' : null}
              onClick={() => selectTabHandler(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="tab-contents">{TAB_DATA[currentTab]?.content}</div>
    </section>
  );
};

export default UserInfoDetail;
