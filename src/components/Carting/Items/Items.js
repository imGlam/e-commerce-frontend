import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Items.module.scss';

const cx = classNames.bind(styles);

function Items({ localstorage, name, image, price, size }) {
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
        const newcount = JSON.parse(window.localStorage.getItem(localstorage));
        if (newcount != 1) {
            setCount(newcount);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem(localstorage, count);
    }, [count]);

    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <table className={cx('table')}>
                    <tbody>
                        <tr className={cx('tr')}>
                            <td className={cx('td')}>
                                <Link className={cx('item-info')}>
                                    <img className={cx('image')} src={image} />
                                    <div className={cx('name-size')}>
                                        <h2>{name}</h2>
                                        <span>{size}</span>
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
                                <h2>{price}</h2>
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
        </div>
    );
}

export default Items;
