import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/svg-arrow.css';
import axios from 'axios';

import { faBagShopping, faBars, faCashRegister, faHomeUser, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrderedItem from './OrderedItem';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function Navbar() {
    const [orderedItems, setOrderedItems] = useState([]);
    const cart = useContext(ShoppingCartContext);
    const totalPrice = cart.getTotalCost();

    useEffect(() => setOrderedItems(cart.items), [cart.items]);

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
                        hideOnClickOutside={true}
                        render={(attrs) => (
                            <div className={cx('tippy-container')}>
                                {orderedItems.length ? (
                                    <div className={cx('cart-with-orders')}>
                                        <div className={cx('ordered-items')}>
                                            <span>Ordered items :</span>
                                        </div>
                                        <div className={cx('order-items-display')}>
                                            {orderedItems.map((item, index) => (
                                                <OrderedItem
                                                    id={item.id}
                                                    key={index}
                                                    name={item.title}
                                                    image={item.image}
                                                    price={item.price}
                                                    version={item.description}
                                                    amount={item.quantity}
                                                />
                                            ))}
                                        </div>
                                        <h2 className={cx('total')}>Total : {totalPrice}</h2>
                                        <Link className={cx('cart-title-container')} to="/cart">
                                            <FontAwesomeIcon className={cx('sign-in-btn')} icon={faSignIn} />
                                            <h3 className={cx('cart-title')}>GIO HANG</h3>
                                        </Link>
                                        <Link className={cx('cart-title-container')} to="/checkout/items-in-cart">
                                            <FontAwesomeIcon icon={faCashRegister} className={cx('sign-in-btn')} />
                                            <h3 className={cx('cart-title')}>THANH TOAN</h3>
                                        </Link>
                                    </div>
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
