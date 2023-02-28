import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/svg-arrow.css';

import {
    faBagShopping,
    faBars,
    faCashRegister,
    faCircleXmark,
    faHomeUser,
    faMagnifyingGlass,
    faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import HeadingBottom from '../HeadingBottom/HeadingBottom';
import OrderedItem from './OrderedItem';

const cx = classNames.bind(styles);

function Navbar() {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState({});
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();
    useEffect(() => {
        fetch(`/carts/get`)
            .then((res) => res.json())
            .then((res) => setCartItems(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`/carts/get-quantity`)
            .then((res) => res.json())
            .then((res) => setQuantity(res))
            .then((err) => console.error(err));
    }, []);
    const subTotalList = cartItems.map((cartItem) => cartItem.price * quantity[cartItem.productId]);
    const subTotal = subTotalList.reduce((acc, cur) => acc + cur, 0);

    console.log('re-render');
    return (
        <div className={cx('container')}>
            <div className={cx('items')}>
                <div className={cx('icon-left')}>
                    {/* <FontAwesomeIcon className={cx('icon')} icon={faBars} /> */}
                    <Link to="/">
                        <FontAwesomeIcon className={cx('icon')} icon={faHomeUser} />
                    </Link>
                </div>
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Nhap tu khoa tim kiem"
                        spellCheck={false}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                    {!!searchValue && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
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
                                <div className={cx('cart-with-orders')}>
                                    {cartItems.length ? (
                                        <div className={cx('ordered-items')}>
                                            <span>Ordered items :</span>
                                            {cartItems.map((item, index) => (
                                                <OrderedItem
                                                    key={index}
                                                    image={item.image}
                                                    price={item.price}
                                                    amount={quantity[item.productId]}
                                                    id={item.productId}
                                                />
                                            ))}
                                            <h2 className={cx('total')}>Total : {subTotal}K</h2>
                                        </div>
                                    ) : (
                                        <div className={cx('no-orders')}>
                                            <h3>No orders</h3>
                                            <span>
                                                Buy . <Link to="/">Here</Link>
                                            </span>
                                        </div>
                                    )}
                                    <div className={cx('order-items-display')}></div>
                                    <Link className={cx('cart-title-container')} to="/cart">
                                        <FontAwesomeIcon className={cx('sign-in-btn')} icon={faSignIn} />
                                        <h3 className={cx('cart-title')}>GIO HANG</h3>
                                    </Link>
                                    <Link className={cx('cart-title-container')} to="/checkout/items-in-cart">
                                        <FontAwesomeIcon icon={faCashRegister} className={cx('sign-in-btn')} />
                                        <h3 className={cx('cart-title')}>THANH TOAN</h3>
                                    </Link>
                                </div>
                            </div>
                        )}
                    >
                        <Link>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                        </Link>
                    </Tippy>
                </div>
            </div>
            <HeadingBottom />
        </div>
    );
}

export default Navbar;
