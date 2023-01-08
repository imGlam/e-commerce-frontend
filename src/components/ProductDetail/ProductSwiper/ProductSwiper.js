import classNames from 'classnames/bind';
import styles from './ProductSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

const cx = classNames.bind(styles);

function ProductSwiper() {
    return (
        <div className={cx('container')}>
            <Swiper
                className={cx('swiper')}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                navigation={{
                    enabled: true,
                    // nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
            >
                <SwiperSlide>
                    <img
                        className={cx('balo-image')}
                        src="https://product.hstatic.net/1000365849/product/5_b9c30dec91dd4107ae26f4c89a456fc9_master.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className={cx('balo-image')}
                        src="https://product.hstatic.net/1000365849/product/3_fdeb66db64bb4efaa8852e44c5b195d1_master.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className={cx('balo-image')}
                        src="https://product.hstatic.net/1000365849/product/6_05bcde1820fa49d6a387a88bdfe46d84_master.jpg"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductSwiper;
