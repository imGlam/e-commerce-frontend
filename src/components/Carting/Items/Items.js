import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Items.module.scss';

const cx = classNames.bind(styles);

function Items() {
    const [count, setCount] = useState(1);

    const removeItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addItem = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        const newcount = JSON.parse(window.localStorage.getItem('quantity'));
        if (newcount != 1) {
            setCount(newcount);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('quantity', count);
    }, [count]);

    return (
        <div className={cx('container')}>
            <table>
                <tbody>
                    <tr>
                        <td className={cx('td')}>
                            <Link className={cx('item-info')}>
                                <img
                                    className={cx('image')}
                                    src="https://product.hstatic.net/200000195489/product/bia_shopee__2__0f98865be44b4bd99625b8c7ad7028c1_medium.jpg"
                                />
                                <div className={cx('name-size')}>
                                    <h2>LOGO CAP</h2>
                                    <span>Free Size</span>
                                </div>
                            </Link>
                        </td>
                        <td className={cx('td')}>
                            <div className={cx('quantity-container')}>
                                <button className={cx('count-btn')} onClick={(e) => removeItem()}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                                </button>
                                <input className={cx('input')} value={count} onChange={() => {}} />
                                <button className={cx('count-btn')} onClick={(e) => addItem()}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                </button>
                            </div>
                        </td>
                        <td className={cx('td')}>
                            <h2>Price</h2>
                        </td>
                        <td className={cx('td')}>
                            <div className={cx('total')}>
                                <h2>Total :</h2>
                                <span className={cx('total-price')}>total</span>
                                <FontAwesomeIcon className={cx('trash-icon')} icon={faTrash} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Items;
