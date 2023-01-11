import classNames from 'classnames/bind';
import styles from './Carting.module.scss';

import Items from './Items/Items';
import Checkout from './Checkout/Checkout';

const cx = classNames.bind(styles);

function Carting() {
    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>GIO HANG CUA BAN</h1>
            <div className={cx('inner')}>
                <div className={cx('items-container')}>
                    <Items />
                </div>
                <Checkout />
            </div>
        </div>
    );
}

export default Carting;
