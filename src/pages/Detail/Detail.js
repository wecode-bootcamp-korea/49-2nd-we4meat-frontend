import React, { useEffect, useState } from 'react';
import { API } from '../../config';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../pages/Loading/Loading';
import OptionSelectBox from '../../components/OptionSelectBox/OptionSelectBox';
import CountBox from '../../components/CountBox/CountBox';
import Button from '../../components/Button/Button';
import DetailTab from './DetailTab/DetailTab';
import './Detail.scss';

const Detail = props => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const productId = Number(id);

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
    setLoading(true);
    getProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductData = () => {
    fetch(`${API.DETAIL}?productId=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result?.data[0]);
        setLoading(false);
      });
  };

  const { getQuantity } = props;
  // const { productImg, productName, price, weight } = data;
  const firstCalc = data?.weight / 100;
  const secondCalc = data?.price / firstCalc;
  const thirdCalc = Math.round(secondCalc).toLocaleString();
  const productPrice = Math.round(data?.price).toLocaleString();

  const buyNow = () => {
    const isLogin = localStorage.getItem('accessToken');

    if (isLogin === null) {
      navigate('/login');
    } else {
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
    }
  };

  const productData = {
    productId: productId,
    quantity: count,
  };

  const setQuantity = () => {
    getQuantity(count);
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        productId: productId,
        quantity: count,
      }),
    })
      .then()
      .then();
  };

  const isOdd = num => {
    if (num % 2 === 0) {
      return false;
    } else {
      return true;
    }
  };

  const result = isOdd(productId);

  return (
    <>
      {loading && <Loading />}
      <main id="main" className="detail">
        <section className="detail-top">
          <div className="inner-wrap">
            <div className="image-area">
              <img src={data?.productImg} alt={data?.productName} />
            </div>
            <div className="metadata-area">
              <hgroup>
                <h2>{data?.productName}</h2>
                <h4>100g당 {thirdCalc}원</h4>
                <h3>
                  기준가 {productPrice}원 ({data?.weight}g)
                </h3>
              </hgroup>
              <OptionSelectBox category="구이용" text="옵션" />
              <CountBox
                plus={handlePlusCount}
                minus={handleMinusCount}
                text="수량"
                count={count}
              />
              <div className="btn-group">
                <Button color="bg-gray" name="바로구매" onClick={buyNow} />
                <Button color="bg-red" name="장바구니" onClick={setQuantity} />
              </div>
            </div>
          </div>
        </section>
        <section className="detail-bottom">
          <DetailTab result={result} />
        </section>
      </main>
    </>
  );
};

export default Detail;
