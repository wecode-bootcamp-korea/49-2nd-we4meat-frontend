import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Loading from '../../pages/Loading/Loading';
import './Order.scss';

const Order = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const getOrderData = () => {
    // fetch(`/data/orderMock.json/order/${id}`)
    fetch(`/data/orderMock.json`)
      .then(response => response.json())
      .then(data => {
        setData(data[Number(id)]);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getOrderData();
    const close = e => {
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBackToOrderList = () => {
    navigate(-1);
  };

  const modalHandler = () => {
    setModalOpen(prev => !prev);
  };

  const { order, order_date, order_number, order_price, order_summary } = data;

  return (
    <>
      {loading && <Loading />}
      <main id="main" className="mypage order">
        <div className="inner-wrap">
          <PageTitle title="주문 상세" />
          <section className="order-details">
            <div className="subtitle-wrap">
              <h3>주문 요약</h3>
              <Button
                color="bg-gray"
                line="line"
                scale="low"
                name="목록보기"
                onClick={goBackToOrderList}
              />
            </div>
            <div className="order-list">
              <div className="order-wrap">
                <span className="order">{order}</span>
                <span className="order-number">
                  <span>주문 번호</span>
                  <em>{order_number}</em>
                </span>
                <span className="order-summary">
                  <span>주문 요약</span>
                  <em>{order_summary}</em>
                </span>
                <span className="order-price">
                  <span>예상 결제 금액</span>
                  <em>{order_price}</em>
                </span>
                <span className="order-date">
                  <span>도착 희망일</span>
                  <em>{order_date}</em>
                </span>
                <span className="order-review">
                  <Button
                    color="bg-gray"
                    scale="low"
                    name="리뷰 작성하기"
                    onClick={() => setModalOpen(true)}
                  />
                  {modalOpen && (
                    <Modal
                      scale="xl"
                      isReviewCreate="true"
                      modalHandler={modalHandler}
                    />
                  )}
                </span>
              </div>
            </div>
          </section>
          <section>
            <div className="subtitle-wrap">
              <h3>배송 정보</h3>
            </div>
            <div className="table-wrap type-a">
              <table>
                <caption className="hidden">배송 정보 테이블</caption>
                <colgroup>
                  <col style={{ width: '120px' }} />
                  <col />
                  <col style={{ width: '120px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>받으시는 분</th>
                    <td>류창선</td>
                    <th>배송 방법</th>
                    <td>새벽배송 (오전 7시 전 도착)</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td colSpan={3}>phoneNumber</td>
                  </tr>
                  <tr>
                    <th>배송 주소</th>
                    <td colSpan={3}>address</td>
                  </tr>
                  <tr>
                    <th>도착 희망일</th>
                    <td colSpan={3}>Expected arrival date</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="subtitle-wrap">
              <h3>상품 정보</h3>
            </div>
            <div className="table-wrap type-b">
              <table>
                <caption className="hidden">배송 정보 테이블</caption>
                <colgroup>
                  <col />
                  <col style={{ width: '190px' }} />
                  <col style={{ width: '86px' }} />
                  <col style={{ width: '89px' }} />
                  <col style={{ width: '102px' }} />
                  <col style={{ width: '137px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>상품명</th>
                    <th>옵션</th>
                    <th>수량</th>
                    <th>단위</th>
                    <th>가격</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 반복문 필요 */}
                  <tr>
                    <th>초신선 무항생제 돼지 삼겹살 구이용</th>
                    <td>보통(16mm)</td>
                    <td>1</td>
                    <td>600</td>
                    <td>22800</td>
                    <td>무게입력중</td>
                  </tr>
                  <tr>
                    <th>초신선 무항생제 돼지 삼겹살 구이용</th>
                    <td>보통(16mm)</td>
                    <td>1</td>
                    <td>600</td>
                    <td>22800</td>
                    <td>무게입력중</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="payment">
            <ul>
              <li>
                <div className="subtitle-wrap">
                  <h3>쿠폰/적립금 정보</h3>
                </div>
                <div className="table-wrap type-a">
                  <table>
                    <caption className="hidden">배송 정보 테이블</caption>
                    <colgroup>
                      <col style={{ width: '120px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th>적용쿠폰</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>적립금 사용</th>
                        <td>0원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <div className="subtitle-wrap">
                  <h3>결제 정보</h3>
                </div>
                <div className="table-wrap type-c">
                  <table>
                    <caption className="hidden">배송 정보 테이블</caption>
                    <colgroup>
                      <col />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>결제 방법</th>
                        <td>월렛</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>총 상품 금액</th>
                        <td>45,600원</td>
                      </tr>
                      <tr>
                        <th>쿠폰 할인</th>
                        <td>-0원</td>
                      </tr>
                      <tr>
                        <th>적립금 할인</th>
                        <td>-0원</td>
                      </tr>
                      <tr>
                        <th>배송비</th>
                        <td>3,500원</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="total-payment">
                  <span>총 결제 금액</span>
                  <span>50,160원</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default Order;
