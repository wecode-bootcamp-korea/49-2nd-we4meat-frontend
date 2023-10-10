import React from 'react';

const ProductDescription = ({ result }) => {
  return (
    <div className="product-description">
      {result && (
        <>
          <img src="/images/detail/1.jpeg" alt="사진 1번" />
          <img src="/images/detail/2.jpeg" alt="사진 2번" />
          <img src="/images/detail/3.jpeg" alt="사진 3번" />
          <img src="/images/detail/4.jpeg" alt="사진 4번" />
          <img src="/images/detail/5.jpeg" alt="사진 5번" />
          <img src="/images/detail/6.jpeg" alt="사진 6번" />
        </>
      )}
      {!result && (
        <>
          <img src="/images/detail/7.jpeg" alt="사진 7번" />
          <img src="/images/detail/8.jpeg" alt="사진 8번" />
          <img src="/images/detail/9.jpeg" alt="사진 9번" />
          <img src="/images/detail/10.jpeg" alt="사진 10번" />
          <img src="/images/detail/0.jpeg" alt="사진 11번" />
        </>
      )}
    </div>
  );
};

export default ProductDescription;
