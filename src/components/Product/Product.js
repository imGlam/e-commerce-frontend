import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Product({ name, price, src, to, size, cond, inStock }) {
    return (
        <div className={cx('container')}>
            <Link to={to}>
                <img className={cx('product-img')} src={src} alt="sneaker" />
            </Link>
            <div className={cx('product-info')}>
                <h2 className={cx('name')}>{name}</h2>
                <div className={cx('size-container')}>
                    <span className={cx('size')}>{size}</span>
                </div>
                <span className={cx('price')}>COND : {cond}</span>
                <span className={cx('price')}>{price} ₫</span>
                <span className={cx('price')}>So luong : {inStock} </span>
            </div>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    to: PropTypes.string,
    size: PropTypes.number,
};

export default Product;
