import classNames from 'classnames/bind';
import styles from './ProductSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { useContext, useEffect, useState } from 'react';
import { nameContext } from '../../../pages/ProductBuy';

const cx = classNames.bind(styles);

function ProductSwiper() {
    const name = useContext(nameContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`/api/find/${name}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.log(err));
    }, [name]);

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
                    <img src={product.image} className={cx('balo-image')} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default ProductSwiper;
