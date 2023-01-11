import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/svg-arrow.css';

import { faBagShopping, faBars, faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Navbar({ to }) {
    const order = true;
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
                        hideOnClick={true}
                        trigger="click"
                        interactive
                        offset={[-10, 4]}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('tippy-container')}>
                                {order ? (
                                    <h1>yes</h1>
                                ) : (
                                    <div className={cx('no-orders')}>
                                        <h3>No orders</h3>
                                        <span>
                                            Buy . <Link to="/">Here</Link>
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    >
                        <Link>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                        </Link>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
