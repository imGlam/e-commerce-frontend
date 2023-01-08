import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

import CheckoutInfo from '../../components/CheckoutInfo';
import CheckoutProduct from '../../components/CheckoutProduct';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('container')}>
            <div className={cx('checkoutInfo')}>
                <CheckoutInfo />
            </div>
            <div className={cx('checkoutProduct')}>
                <CheckoutProduct />
            </div>
        </div>
    );
}

export default Checkout;
