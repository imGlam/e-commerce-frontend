import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

// Now you can use Swiper
export const CustomSwiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
    css: true,
    navigation: true,
    pagination: true,
    mousewheel: true,
    keyboard: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // ...
});
