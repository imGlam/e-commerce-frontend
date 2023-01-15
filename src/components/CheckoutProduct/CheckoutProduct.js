import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CheckoutProduct.module.scss';
import axios from 'axios';

import OrderedItem from '../../layouts/components/Navbar/OrderedItem';
import Button from '../Button';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CheckoutProduct() {
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        axios
            .get('/api/cart')
            .then((items) => setCheckoutItems(items.data))
            .catch((err) => console.error(err));
    }, []);

    const addItem = () => {
        setCount(count + 1);
    };

    const removeItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className={cx('container')}>
            <div>
                <h1>Ordered Items : </h1>
            </div>
            {checkoutItems.length > 0 ? (
                checkoutItems.map((item, index) => (
                    <div className={cx('order-product')} key={index}>
                        <div className={cx('ordered-items-container')}>
                            <Link className={cx('item-info-container')}>
                                <img className={cx('image')} src={item.image} alt="logo" />
                                <div className={cx('item-info')}>
                                    <h2>{item.name}</h2>
                                    <span>Version : {item.description}</span>
                                    <br />

                                    <div className={cx('quantity-container')}>
                                        <span className={cx('amount')}>Amount : </span>
                                        <input
                                            className={cx('input')}
                                            value={item.amount}
                                            onChange={() => {}}
                                            disabled
                                        />
                                        <button className={cx('count-btn')} onClick={(e) => removeItem()}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                                        </button>
                                        <button className={cx('count-btn')} onClick={(e) => addItem()}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                        </button>
                                    </div>

                                    <h2>{item.price}</h2>
                                </div>
                            </Link>

                            <form target="frame" method="post" action={`/api/cart/delete/${item.name}?_method=DELETE`}>
                                <button className={cx('trash-btn')}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </form>
                            <iframe name="frame" className={cx('iframe')} />
                        </div>
                        <div className={cx('code-discount')}>
                            <input className={cx('input-discount')} />
                            <Button className={cx('use-btn')}>SU DUNG</Button>
                        </div>
                        <div className={cx('delivery')}>
                            <table className={cx('delivery-table')}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>Tam tinh</span>
                                        </td>
                                        <td className={cx('second-td')}>
                                            <span>760,000₫</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Phi van chuyen</span>
                                        </td>
                                        <td className={cx('second-td')}>
                                            <span>—</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h3>Tong tien</h3>
                                        </td>
                                        <td className={cx('second-td')}>
                                            <h3>VND 760,000₫</h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
