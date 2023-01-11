import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function OrderedItem() {
    return <div className={cx('ordered-item-container')}></div>;
}

export default OrderedItem;
