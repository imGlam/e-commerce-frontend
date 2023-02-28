import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CheckoutProduct.module.scss';
import axios from 'axios';

import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CheckoutProduct() {
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

    const removeFromCart = (productId) => {
        axios.patch(`/carts/remove`, {
            productId,
        });
        window.location.reload();
    };

    return (
        <div className={cx('container')}>
            <div>
                <h1>Ordered Items : </h1>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div className={cx('order-product')} key={index}>
                        <div className={cx('ordered-items-container')}>
                            <Link className={cx('item-info-container')}>
                                <img className={cx('image')} src={item.image} alt="logo" />
                                <div className={cx('item-info')}>
                                    <h2>{item.title}</h2>
                                    <br />

                                    <div className={cx('quantity-container')}>
                                        <h3 className={cx('amount')}>({quantity[item.productId]}) </h3>
                                        <input className={cx('input')} value={item.quantity} onChange={() => {}} />
                                        <button className={cx('count-btn')} onClick={(e) => {}}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                                        </button>
                                        <button className={cx('count-btn')} onClick={(e) => {}}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                        </button>
                                    </div>

                                    <h2>{item.price}</h2>
                                </div>
                            </Link>

                            <button className={cx('trash-btn')} onClick={(e) => removeFromCart(item.productId)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <h2>Chua co san pham nao trong gio hang</h2>
                </div>
            )}
        </div>
    );
}

export default CheckoutProduct;
