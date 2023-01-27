import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './CheckoutProduct.module.scss';

import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function CheckoutProduct() {
    const cart = useContext(ShoppingCartContext);

    return (
        <div className={cx('container')}>
            <div>
                <h1>Ordered Items : </h1>
            </div>
            {cart.items.length > 0 ? (
                cart.items.map((item, index) => (
                    <div className={cx('order-product')} key={index}>
                        <div className={cx('ordered-items-container')}>
                            <Link className={cx('item-info-container')}>
                                <img className={cx('image')} src={item.image} alt="logo" />
                                <div className={cx('item-info')}>
                                    <h2>{item.title}</h2>
                                    <span>Version : {item.version}</span>
                                    <br />

                                    <div className={cx('quantity-container')}>
                                        <span className={cx('amount')}>Amount : </span>
                                        <input
                                            className={cx('input')}
                                            value={item.quantity}
                                            onChange={() => {}}
                                            disabled
                                        />
                                        <button
                                            className={cx('count-btn')}
                                            onClick={(e) => cart.removeOneFromCart(item.id)}
                                        >
                                            <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                                        </button>
                                        <button className={cx('count-btn')} onClick={(e) => cart.addOneToCart(item.id)}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                        </button>
                                    </div>

                                    <h2>{item.price}</h2>
                                </div>
                            </Link>

                            {/* <form target="frame" method="post" action={`/api/cart/delete/${item.name}?_method=DELETE`}> */}
                            <button className={cx('trash-btn')} onClick={(e) => cart.deleteFromCart(item.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            {/* </form> */}
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
