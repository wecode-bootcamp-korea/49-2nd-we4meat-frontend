import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../config';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Loading from '../../pages/Loading/Loading';
import './Order.scss';

const Order = props => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const getOrderData = () => {
    fetch(`${API.ORDER_DETAIL}?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setData(result?.data[0]);
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

  const def = () => {
    setModalOpen(true);
    abc(true);
  };

  // const { PhoneNumber, address, name, orderId, userEmail, orderItems } = data;

  const { abc, setIsModal, isModal } = props;

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
                {/* <span className="order">{orderId}</span> */}
                <span className="order-number">
                  <span>주문 번호</span>
                  {/* <em>{orderId}</em> */}
                </span>
                <span className="order-summary">
                  <span>주문 요약</span>
                  {/* <em>{orderItems[0].productName} 외</em> */}
                </span>
                <span className="order-price">
                  <span>총 결제 금액</span>
                  <em>?</em>
                </span>
                <span className="order-date">
                  <span>주문일자</span>
                  <em>?</em>
                </span>
                <span className="order-review">
                  <Button
                    color="bg-gray"
                    scale="low"
                    name="리뷰 작성하기"
                    onClick={def}
                  />
                  {modalOpen && (
                    <Modal
                      scale="xs"
                      isReviewCreate="true"
                      modalHandler={modalHandler}
                      abc={abc}
                      setIsModal={setIsModal}
                      isModal={isModal}
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
                    {/* <td>{name}</td> */}
                    <th>배송 방법</th>
                    <td>새벽배송 (오전 7시 전 도착)</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    {/* <td colSpan={3}>{PhoneNumber}</td> */}
                  </tr>
                  <tr>
                    <th>배송 주소</th>
                    {/* <td colSpan={3}>{address}</td> */}
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
