import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Pagination from '../Pagination/Pagination';
import './OrderDetails.scss';

const OrderDetails = () => {
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
    // BE와 규격 협의 필요
    fetch(`/data/orderMock.json?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setPaginationParams();
        setDataList(data.reverse());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const totalPages = Math.ceil(dataList.length / 10);

  return (
    <div className="order-details">
      {dataList?.length > 0 ? (
        <>
          <ol className="order-list">
            {dataList?.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/order/${item.id}`}>
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

export default OrderDetails;
