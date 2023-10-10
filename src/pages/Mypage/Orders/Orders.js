import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../config';
import Button from '../../../components/Button/Button';
import Pagination from '../Pagination/Pagination';
import './Orders.scss';

const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const offset = searchParams.get('offset');
  let limit = searchParams.get('limit');

  const setPaginationParams = () => {
    limit = 10;
    searchParams.set('offset', (page - 1) * limit);
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getOrdersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getOrdersData = () => {
    fetch(`${API.ORDER}?offset=${offset}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setPaginationParams();
        setDataList(result?.data);
      });
  };

  const totalPages = Math.ceil(dataList.length / 10);

  return (
    <div className="order-details">
      {dataList?.length > 0 ? (
        <>
          <ol className="order-list">
            {dataList?.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/order/${item.orderId}`}>
                    <span className="order">{index + 1}</span>
                    <span className="order-number">
                      <span>주문 번호</span>
                      <em>{item.orderId}</em>
                    </span>
                    <span className="order-summary">
                      <span>주문 요약</span>
                      <em>{item.orderItems[0].productName} 외</em>
                    </span>
                    <span className="order-price">
                      <span>총 결제 금액</span>
                      <em>{item.orderTotalPrice}</em>
                    </span>
                    <span className="order-date">
                      <span>주문일자</span>
                      <em>{item.orderDate.substr(0, 10)}</em>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          {/* 
            - totalPages: 전체 페이지
            - page: 현재 페이지
            - setPage: 페이지 변경을 위한 세터 함수
          */}
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      ) : (
        <>
          <span className="no-order">주문한 내역이 없습니다.</span>
          <Button name="쇼핑하러가기" />
        </>
      )}
    </div>
  );
};

export default Orders;
