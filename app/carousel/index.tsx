import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './index.module.css';
import { carouselList } from "@/app/data";
import { SwiperOptions } from "swiper/types";
import CardItem from "@/app/cards";

const Carousel = () => {

  // 指定初始化展示的卡片
  const getInitCard = () => {
    const findIndex = carouselList.findIndex(item => item.name === 'A Mortal');
    if (findIndex === -1) {
      return Math.ceil(carouselList.length / 2) - 1;
    }
    return findIndex;
  };

  const commonProps: SwiperOptions = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      type: 'fraction',
    },
    initialSlide: getInitCard(),
    modules: [Pagination],
  };

  // 自定义缩放特效
  const creativeProps: SwiperOptions = {
    modules: [...commonProps.modules || [], EffectCreative],
    effect: 'creative',
    creativeEffect: {
      limitProgress: 3,
      prev: {
        translate: ["-120%", 0, -500],
      },
      next: {
        translate: ["120%", 0, -500],
      },
    },
  };

  // 滚动特效
  const coverflowProps: SwiperOptions = {
    modules: [...commonProps.modules || [], EffectCoverflow],
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  return (
    <Swiper
      className={styles['my-swiper']}
      {...commonProps}
      {...coverflowProps}
    >
      {carouselList.map(item => (
        <SwiperSlide key={item.id} className={styles['swiper-slide']}>
          <CardItem cardItem={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
