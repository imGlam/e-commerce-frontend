import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function OrderedItem() {
    return (
        <div className={cx('ordered-items-container')}>
            <Link className={cx('item-info-container')}>
                <img
                    className={cx('image')}
                    src="https://product.hstatic.net/1000365849/product/palette_1_718d748a51d54243b1d91b6be737f80f_compact.jpg"
                />
                <div className={cx('item-info')}>
                    <h2>Name</h2>
                    <span>Version : Black</span>
                    <br />
                    <span>Amount : 1</span>
                    <h2>Price</h2>
                </div>
            </Link>
            <Link className={cx('delete-btn')}>
                <FontAwesomeIcon icon={faTrash} />
            </Link>
        </div>
    );
}

export default OrderedItem;
