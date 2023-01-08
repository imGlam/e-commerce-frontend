import classNames from 'classnames/bind';
import styles from './ProductsContainer.module.scss';
import PropTypes from 'prop-types';

import Product from '../Product';

const cx = classNames.bind(styles);

function ProductsContainer({ name, children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('items-container')}>
                <div className={cx('heading')}>
                    <h1 className={cx('name')}>{name}</h1>
                </div>
                <div className={cx('product-display')}>{children}</div>
            </div>
        </div>
    );
}

ProductsContainer.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default ProductsContainer;
