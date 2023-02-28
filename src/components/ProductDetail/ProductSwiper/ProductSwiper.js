import classNames from 'classnames/bind';
import styles from './ProductSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { useContext, useEffect, useState } from 'react';
import { idContext } from '../../../pages/ProductBuy';

const cx = classNames.bind(styles);

function ProductSwiper() {
    const id = useContext(idContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`/products/get/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={cx('container')}>
            <Swiper
                className={cx('swiper-container')}
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
                    <img src={product.image} className={cx('balo-image')} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product.image} className={cx('balo-image')} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductSwiper;
