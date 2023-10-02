import React, { useEffect, useState } from 'react';
import './Review.scss';

const Review = () => {
  const [dataList, setDataList] = useState([]);

  const fetchReview = () => {
    fetch('/data/ReviewMock.json')
      .then(response => response.json())
      .then(data => {
        setDataList(data);
      });
  };

  useEffect(() => {
    fetchReview();
  }, []);

  const makeBuyTogether = target => {
    const data = target.map((item, index) => {
      return (
        <li key={index}>
          {item.product_name} x {item.product_count}
        </li>
      );
    });
    return data;
  };

  // review-item에 클릭 이벤트로 모달 팝업 노출 필요
  // 더보기 버튼: 4개씩 추가 노출(기본 8개)

  return (
    <>
      <ul className="review-list">
        {dataList?.map((item, index) => {
          return (
            <li className="review-item" key={index}>
              <div className="review-wrap">
                <div className="left-area">
                  <strong>{item.title}</strong>
                  <textarea value={item.content} readOnly />
                  <div className="metadata">
                    <span>
                      <span>{item.user_name}</span>
                      <em>{item.user_buy}회 구매</em>
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* 이미지 있는 경우만 조건부 렌더링 필요 */}
                {item.HasImage && (
                  <div className="right-area">
                    <img
                      src={item.image_url}
                      alt={`${item.user_name} 님의 리뷰 사진`}
                    />
                  </div>
                )}
              </div>
              <div className="additional-info">
                <span>
                  함께 구매하신 상품 &#40;{item?.together.length}&#41;
                </span>
                <ul>{makeBuyTogether(item?.together)}</ul>
              </div>
            </li>
          );
        })}
      </ul>

      <button type="button" className="btn-review-more">
        <span>더보기</span>
      </button>
    </>
  );
};

export default Review;
