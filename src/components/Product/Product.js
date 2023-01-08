import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Product({ name, price, src, to }) {
    return (
        <div className={cx('container')}>
            <Link to={to}>
                <img className={cx('product-img')} src={src} alt="backpack" />
            </Link>
            <div className={cx('product-info')}>
                <h2 className={cx('name')}>{name}</h2>
                <span className={cx('price')}>{price}</span>
            </div>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default Product;
