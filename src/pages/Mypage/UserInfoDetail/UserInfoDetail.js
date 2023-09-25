import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserInfoDetail.scss';

const UserInfoDetail = () => {
  const [currentTab, setTab] = useState(0);
  const TAB_DATA = [
    { name: '주문내역', content: '주문내역 콘텐츠' },
    { name: '개인정보관리', content: '개인정보관리 콘텐츠' },
  ];
  const selectMenuHandler = index => {
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
              onClick={() => selectMenuHandler(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="tab-contents">
        {TAB_DATA[currentTab]?.content}
        {/* 디자인이 다르므로 조건문 렌더링 필요: 주문내역 / 개인정보관리 각각 컴포넌트로 빼기 */}
        {/* 주문내역: useRef 사용? */}
        <div className="order-details" style={{ display: 'none' }}>
          {/* 1) 주문한 내역이 없는 경우: 주문한 내역이 없습니다. */}
          {/* <span className="no-order">주문한 내역이 없습니다.</span>
        <Button /> */}

          {/* 2) 주문한 내역이 있는 경우(상세: mypage?view=detail&key=2) */}
          <ol className="order-list">
            <li>
              {/* <Link to={`/Mypage/${id}`}> */}
              <Link to="/">
                <span className="order">01</span>
                <span className="order-number">
                  <span>주문 번호</span>
                  <em>001-23-09-25</em>
                </span>
                <span className="order-summary">
                  <span>주문 요약</span>
                  <em>초신선 돼지 목살 구이용 포함 (총 1개)</em>
                </span>
                <span className="order-price">
                  <span>예상 결제 금액</span>
                  <em>21,780원</em>
                </span>
                <span className="order-date">
                  <span>도착 희망일</span>
                  <em>2023-09-26 (화)</em>
                </span>
                <span className="order-buttons">1</span>
              </Link>
            </li>
          </ol>
        </div>
        {/* 개인정보관리 */}
        {/* <div className="a">개인정보관리 중 필요한 정보는 무엇인가요?</div> */}
      </div>
    </section>
  );
};

export default UserInfoDetail;
