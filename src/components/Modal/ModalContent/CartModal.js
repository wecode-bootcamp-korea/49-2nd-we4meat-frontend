import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CountBox from '../../CountBox/CountBox';
import OptionSelectBox from '../../OptionSelectBox/OptionSelectBox';
import Button from '../../Button/Button';
import { API } from '../../../config';

const CartModal = ({
  id,
  title,
  price,
  modalHandler,
  modalOpen,
  setModalOpen,
  getQuantity,
  quantity,
}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleMinusCount = () => {
    if (count === 1) {
      alert('최소 수량입니다.');
    } else {
      setCount(count - 1);
    }
  };

  const handlePlusCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductData = () => {
    // fetch(`/data/orderMock.json/order/${id}`)
    fetch(`/data/productMock.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // setData(data);
        setData(data[0]);
      });
  };

  const totalPrice = (price * count).toLocaleString();

  const buyNow = () => {
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify(productData),
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error('오류입니다.');
      })
      .then(result => {
        if (result.message === 'ITEM_ADDED') {
          setQuantity();
          navigate('/cart', {
            state: productData,
          });
        } else {
          alert('다시 시도해주세요.');
        }
      });
  };

  const productData = {
    productId: id,
    quantity: count,
  };

  const setQuantity = () => {
    // fetch(`${API.CART}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     authorization: localStorage.getItem('accessToken'),
    //   },
    //   body: JSON.stringify(productData),
    // })
    //   .then(res => {
    //     if (res.ok === true) {
    //       return res.json();
    //     }
    //     throw new Error('오류입니다.');
    //   })
    //   .then(result => {
    //     if (result.message === 'ITEM_ADDED') {
    //       setQuantity();
    //       setModalOpen(false);
    //     } else {
    //       alert('다시 시도해주세요.');
    //     }
    //   });
    setModalOpen(false);
    getQuantity(count);
  };

  // console.log(getQuantity);
  console.log(productData);

  return (
    <>
      <div className="cart-modal">
        <h1 tabIndex={0}>{title}</h1>
        <CountBox
          scale="full"
          count={count}
          plus={handlePlusCount}
          minus={handleMinusCount}
          text=""
        />
        <OptionSelectBox category="구이용" text="옵션선택" scale="full" />
        <span className="price">{totalPrice}원</span>
      </div>
      <div className="btn-group">
        {/* 장바구니에 담은 후 장바구니 페이지로 이동 */}
        <Button color="bg-gray" name="바로구매" onClick={buyNow} />
        {/* 장바구니에만 담고 현 페이지 유지 */}
        <Button color="bg-black" name="장바구니" onClick={setQuantity} />
      </div>
    </>
  );
};

export default CartModal;
