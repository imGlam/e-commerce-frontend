import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function OrderedItem({ id, image, name, version, price, amount, quantity }) {
    const cart = useContext(ShoppingCartContext);

    const [count, setCount] = useState(1);
    const addItem = () => {
        setCount(count + 1);
    };
    const removeItem = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div className={cx('ordered-items-container')}>
            <Link className={cx('item-info-container')}>
                <img className={cx('image')} src={image} alt="logo" />
                <div className={cx('item-info')}>
                    <h2>{name}</h2>
                    <span>Version : {version}</span>
                    <br />

                    {quantity ? (
                        <div className={cx('quantity-container')}>
                            <span className={cx('amount')}>Amount : </span>
                            <input className={cx('input')} value={amount} onChange={() => {}} disabled />
                            <button className={cx('count-btn')} onClick={(e) => removeItem()}>
                                <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                            </button>
                            <button className={cx('count-btn')} onClick={(e) => addItem()}>
                                <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                            </button>
                        </div>
                    ) : (
                        <span>Amount : {amount}</span>
                    )}
                    <h3>Price : {price}</h3>
                </div>
            </Link>

            {/* <form method="post" action={`/api/cart/delete/${name}?_method=DELETE`}> */}
            <button className={cx('trash-btn')} onClick={(e) => cart.deleteFromCart(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            {/* </form> */}
        </div>
    );
}
export default OrderedItem;
