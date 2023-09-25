import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './OrderDetails.scss';

const OrderDetails = () => {
  const [dataList, setDataList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    // BE와 협의 필요한 소스 코드
    fetch(`/data/orderMock.json?_start=${offset}&_limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setDataList(data.reverse());
      });
  }, [offset, limit]);

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  return (
    <div className="order-details">
      {/* 1) 주문한 내역이 없는 경우: 주문한 내역이 없습니다. */}
      {/* <span className="no-order">주문한 내역이 없습니다.</span>
        <Button /> */}
      {/* 2) 주문한 내역이 있는 경우(상세: mypage?view=detail&key=2) */}
      <ol className="order-list">
        {dataList?.map((item, index) => {
          return (
            <li key={index}>
              <Link to="/">
                <span className="order">{item.order}</span>
                <span className="order-number">
                  <span>주문 번호</span>
                  <em>{item.order_number}</em>
                </span>
                <span className="order-summary">
                  <span>주문 요약</span>
                  <em>{item.order_summary}</em>
                </span>
                <span className="order-price">
                  <span>예상 결제 금액</span>
                  <em>{item.order_price}</em>
                </span>
                <span className="order-date">
                  <span>도착 희망일</span>
                  <em>{item.order_date}</em>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <button onClick={() => movePage(1)}>1</button>
      <button onClick={() => movePage(2)}>2</button>
      <button onClick={() => movePage(3)}>3</button>
      <Pagination />
    </div>
  );
};

export default OrderDetails;
