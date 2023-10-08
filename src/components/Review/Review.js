import React, { useEffect, useState } from 'react';
import { API } from '../../config';
import './Review.scss';

const Review = () => {
  const [dataList, setDataList] = useState([]);

  const getReviews = () => {
    fetch(`${API.REVIEW}?tab=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setDataList(result?.data);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  // const makeBuyTogether = target => {
  //   const data = target.map((item, index) => {
  //     return (
  //       <li key={index}>
  //         {item.product_name} x {item.product_count}
  //       </li>
  //     );
  //   });
  //   return data;
  // };

  // 더보기 버튼: 4개씩 추가 노출(기본 8개)
  // const aaa = () => {
  // };

  return (
    <>
      <ul className="review-list">
        {dataList?.map((item, index) => {
          return (
            <li className="review-item" key={index}>
              <div className="review-wrap">
                <div className="left-area">
                  <strong>{item.title}</strong>
                  <textarea value={item.body} readOnly />
                  {/* <div className="metadata">
                    <span>
                      <span>{item.user_name}</span>
                      <em>{item.user_buy}회 구매</em>
                    </span>
                    <span>{item.created_at}</span>
                  </div> */}
                </div>

                {/* {item.HasImage && (
                  <div className="right-area">
                    <img
                      src={item.image_url}
                      alt={`${item.user_name} 님의 리뷰 사진`}
                    />
                  </div>
                )} */}
              </div>
              {/* <div className="additional-info">
                <span>
                  함께 구매하신 상품 &#40;{item?.together.length}&#41;
                </span>
                <ul>{makeBuyTogether(item?.together)}</ul>
              </div> */}
            </li>
          );
        })}
      </ul>

      {/* <button type="button" className="btn-review-more" onClick={aaa}>
        <span>더보기</span>
      </button> */}
    </>
  );
};

export default Review;
