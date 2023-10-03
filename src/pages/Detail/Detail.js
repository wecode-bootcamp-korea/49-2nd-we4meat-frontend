import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../pages/Loading/Loading';
import OptionSelectBox from '../../components/OptionSelectBox/OptionSelectBox';
import CountBox from '../../components/CountBox/CountBox';
import Button from '../../components/Button/Button';
import DetailTab from './DetailTab/DetailTab';
import './Detail.scss';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [count, setCount] = useState(1);
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
    // fetch(`/data/orderMock.json/order/${id}`)
    fetch(`/data/mock.json`)
      .then(response => response.json())
      .then(data => {
        setData(data[Number(id)]);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { product_img, product_name, price, weight } = data;
  const firstCalc = weight / 100;
  const secondCalc = price / firstCalc;
  const thirdCalc = Math.round(secondCalc).toLocaleString('ko-KR');

  return (
    <>
      {loading && <Loading />}
      <main id="main" className="detail">
        <section className="detail-top">
          <div className="inner-wrap">
            <div className="image-area">
              <img src={product_img} alt={product_name} />
            </div>
            <div className="metadata-area">
              <hgroup>
                <h2>{product_name}</h2>
                <h4>100g당 {thirdCalc}원</h4>
                <h3>
                  기준가 {price?.toLocaleString('ko-KR')}원 ({weight}g)
                </h3>
              </hgroup>
              <OptionSelectBox category="구이용" text="옵션" />
              <CountBox
                plus={handlePlusCount}
                minus={handleMinusCount}
                text="수량"
              />
              <div className="btn-group">
                <Button color="bg-gray" name="바로구매" />
                <Button color="bg-red" name="장바구니" />
              </div>
            </div>
          </div>
        </section>
        <section className="detail-bottom">
          <DetailTab />
        </section>
      </main>
    </>
  );
};

export default Detail;
