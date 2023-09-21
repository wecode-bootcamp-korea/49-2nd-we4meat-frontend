import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Event.scss';

const Event = () => {
  return (
    <div className="event">
      <Swiper
        modules={[Navigation, Pagination]}
        loop
        navigation={{
          prevEl: '.swiper-prev-btn',
          nextEl: '.swiper-next-btn',
        }}
        pagination={{
          el: '.event-swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return `<span>${current}</span> / ${total}`;
          },
        }}
      >
        <SwiperSlide>
          <img src="/images/swiper/meat1.jpg" alt="1번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat2.jpg" alt="2번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat3.jpg" alt="3번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat4.jpg" alt="4번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat5.jpg" alt="5번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat6.jpg" alt="6번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat7.jpg" alt="7번 고기 이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/swiper/meat8.jpg" alt="8번 고기 이미지" />
        </SwiperSlide>
        <div className="controller">
          <button type="button" className="swiper-prev-btn">
            Prev
          </button>
          <span className="event-swiper-pagination" />
          <button type="button" className="swiper-next-btn">
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Event;
