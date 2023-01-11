import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import ProductDescription from './ProductDescription';
import ProductSwiper from './ProductSwiper';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('container')}>
            <div className={cx('product-swiper')}>
                <ProductSwiper />
            </div>
            <div className={cx('product-description')}>
                <ProductDescription />
            </div>
        </div>
    );
}

export default ProductDetail;
