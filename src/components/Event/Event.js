import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Event.scss';

function Event() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span className="`;

      // '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      navigation
      pagination={pagination}
      loop={true}
    >
      <SwiperSlide>Event 1</SwiperSlide>
      <SwiperSlide>Event 2</SwiperSlide>
      <SwiperSlide>Event 3</SwiperSlide>
      <SwiperSlide>Event 4</SwiperSlide>
      <SwiperSlide>Event 5</SwiperSlide>
      <SwiperSlide>Event 6</SwiperSlide>
      <SwiperSlide>Event 7</SwiperSlide>
      <SwiperSlide>Event 8</SwiperSlide>
    </Swiper>
  );
}

export default Event;
