import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';
import styles from './Items.module.scss';

const cx = classNames.bind(styles);

function Items({ quantity, name, image, price, size, subTotal }) {
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
                                    <button className={cx('count-btn')} onClick={(e) => {}}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                                    </button>
                                    <input className={cx('input')} value={quantity} onChange={() => {}} />
                                    <button className={cx('count-btn')} onClick={(e) => {}}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                                    </button>
                                </div>
                            </td>
                            <td className={cx('td')}>
                                <h2>{price}</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Items;
