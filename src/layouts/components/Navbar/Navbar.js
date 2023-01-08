import { faBagShopping, faBars, faCartShopping, faHomeUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar({ to }) {
    return (
        <div className={cx('container')}>
            <div className={cx('items')}>
                <div className={cx('icon-left')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faBars} />
                    <FontAwesomeIcon className={cx('icon')} icon={faHomeUser} />
                </div>
                <h1 className={cx('title')}>Beauty in your way </h1>
                <Link to="/checkout">
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
