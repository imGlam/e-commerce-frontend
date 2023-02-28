import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function OrderedItem({ id, image, name, version, price, amount }) {
    const removeFromCart = (productId) => {
        axios.patch(`/carts/remove`, {
            productId,
        });
        window.location.reload();
    };
    return (
        <div className={cx('ordered-items-container')}>
            <Link className={cx('item-info-container')}>
                <img className={cx('image')} src={image} alt="logo" />
                <h3 className={cx('price')}>${price}</h3>
                <h3>({amount})</h3>
            </Link>

            <button
                className={cx('trash-btn')}
                onClick={(e) => {
                    removeFromCart(id);
                }}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}
export default OrderedItem;
