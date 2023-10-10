import React from 'react';
import EVENT_SWIPER_DATA from '../../../data/eventSwiperData';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './EventSwiper.scss';

const EventSwiper = () => {
  return (
    <div className="event-swiper-wrap">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2000 }}
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
        {EVENT_SWIPER_DATA.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <Link to={item.path}>
                <img src={item.imageSrc} alt={item.alt} />
              </Link>
            </SwiperSlide>
          );
        })}

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

export default EventSwiper;
