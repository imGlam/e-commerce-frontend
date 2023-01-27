import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

import CheckoutInfo from '../../components/CheckoutInfo';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('container')}>
            <div>
                <CheckoutInfo />
            </div>
        </div>
    );
}

export default Checkout;
