import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import './MypageView.scss';

const Mypage = () => {
  return (
    <main id="main" className="mypage">
      <div className="inner-wrap">
        <PageTitle title="마이페이지" />

        <section className="user-info-overview">
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/mypage/rank_welcome.png'}
              alt="웰컴 등급 회원"
            />
          </div>
          <div>
            <div>
              <h3>Hello, 류창선님</h3>
              <button type="button">로그아웃</button>
            </div>
            <table>
              <caption className="hidden">회원 정보 테이블</caption>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>회원등급</th>
                  <th>월렛</th>
                  <th>쿠폰</th>
                  <th>구매</th>
                  <th>회원번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[웰컴]</td>
                  <td>[0원]</td>
                  <td>[0개]</td>
                  <td>[0건]</td>
                  <td>[2309-5471-0258-2018]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="user-info-detail">
          <ul className="tabs">
            <li className="selected">
              <button type="button">주문내역</button>
            </li>
            <li>
              <button type="button">개인정보관리</button>
            </li>
          </ul>
          <div className="tab-contents">
            {/* 디자인이 다르므로 조건문 렌더링 필요 */}
            {/* 주문내역: useRef 사용? */}
            <div className="order-details">
              {/* 1) 주문한 내역이 없는 경우: 주문한 내역이 없습니다. */}
              {/* <span className="no-order">주문한 내역이 없습니다.</span>
              <Button /> */}

              {/* 2) 주문한 내역이 있는 경우(상세: mypage?view=detail&key=2) */}
              <ol className="order-list">
                <li>
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

        <section className="pagination">
          <button type="button" className="prev">
            prev
          </button>
          <div className="pagination-number">
            <span className="present">1</span>
            <span className="total">2</span>
          </div>
          <button type="button" className="next">
            next
          </button>
        </section>
      </div>
    </main>
  );
};

export default Mypage;
