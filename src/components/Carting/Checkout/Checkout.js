import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import { Link } from 'react-router-dom';

import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Checkout({ total }) {
    return (
        <div className={cx('container')}>
            <div className={cx('order-summary')}>
                <h1 className={cx('title')}>Thong tin don hang </h1>
                <div className={cx('total')}>
                    <h2>Total :</h2>
                    <h2>{total}</h2>
                </div>
                <div className={cx('checkout')}>
                    <p>Ban co the nhap ma giam gia o trang thanh toan</p>
                    <Link to="/checkout/items-in-cart">
                        <Button className={cx('checkout-btn')}>THANH TOAN</Button>
                    </Link>
                </div>
            </div>
            <div className={cx('footer')}>
                <Link className={cx('footer-title')}>
                    Tiep tuc mua hang <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
        </div>
    );
}

export default Checkout;
