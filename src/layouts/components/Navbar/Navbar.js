import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';

import { faBagShopping, faBars, faCartShopping, faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Navbar({ to }) {
    return (
        <div className={cx('container')}>
            <div className={cx('items')}>
                <div className={cx('icon-left')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faBars} />
                    <Link to="/">
                        <FontAwesomeIcon className={cx('icon')} icon={faHomeUser} />
                    </Link>
                </div>
                <h1 className={cx('title')}>Beauty in your way </h1>
                <div>
                    <Tippy
                        hideOnClick={false}
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('tippy-container')} tabIndex="-1" {...attrs}>
                                <div className={cx('cart')}>
                                    <h3>No orders</h3>
                                    <div>
                                        <span>Buy.</span>
                                        <Link to="/">Here</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <Link to="/checkout">
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                        </Link>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
