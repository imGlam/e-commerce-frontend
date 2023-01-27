import classNames from 'classnames/bind';
import styles from './Carting.module.scss';

import { useContext } from 'react';

import Checkout from './Checkout/Checkout';
import Items from './Items/Items';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function Carting() {
    const cart = useContext(ShoppingCartContext);
    const total = cart.getTotalCost();
    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>GIO HANG CUA BAN</h1>
            <div className={cx('inner')}>
                <div className={cx('items-container')}>
                    {cart.items.map((item, index) => (
                        <Items
                            key={index}
                            name={item.title}
                            price={item.price}
                            image={item.image}
                            size={item.size}
                            total={item.total}
                            quantity={item.quantity}
                            id={item.id}
                        />
                    ))}
                </div>
                <Checkout total={total} />
            </div>
        </div>
    );
}

export default Carting;
