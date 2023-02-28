import classNames from 'classnames/bind';
import styles from './Carting.module.scss';

import { useContext, useEffect, useState } from 'react';

import Checkout from './Checkout/Checkout';
import Items from './Items/Items';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Carting() {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState({});
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
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('items-container')}>
                    {cartItems.length ? (
                        cartItems.map((item, index) => (
                            <div>
                                <h1 className={cx('title')}>GIO HANG CUA BAN</h1>
                                <Items
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    quantity={quantity[item.productId]}
                                />
                                <Checkout total={subTotal} />
                            </div>
                        ))
                    ) : (
                        <div className={cx('no-cartItems')}>
                            <h1 className={cx('title')}>
                                Ban chua co san pham nao trong gio hang !
                                <br />
                                <Link to={'/'} className={cx('link')}>
                                    Mua hang tai day .
                                </Link>
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Carting;
