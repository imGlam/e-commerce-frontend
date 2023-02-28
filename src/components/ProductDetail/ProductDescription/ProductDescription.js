import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';
import axios from 'axios';
import Cookies from 'js-cookie';

import Button from '../../Button';
import { idContext } from '../../../pages/ProductBuy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDescription() {
    const id = useContext(idContext);
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    function increaseQuantity() {
        setCount(count + 1);
    }

    function decreaseQuantity() {
        if (count > 1) setCount(count - 1);
    }

    const addToCart = () => {
        axios.post('/carts/add', {
            productId: product.productId,
            quantity: count,
        });
        window.location.reload();
    };

    useEffect(() => {
        fetch(`/products/get/${id}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('brand-and-product-name')}>
                <span className={cx('brand')}>
                    Thuong hieu : <Link className={cx('brand-link')}>{'Vans'}</Link>
                </span>
                <h2 className={cx('product-name')}>Vans Old Skool</h2>
            </div>
            <div className={cx('size-price-and-condition')}>
                <h3 className={cx('price')}>Gia : {140}K</h3>
                <div className={cx('size-and-condition')}>
                    <span className={cx('size-text')}>Kich thuoc </span>
                    <span className={cx('text-separate')}>|</span>
                    <span className={cx('condition-text')}>Do moi : </span>
                    <div className={cx('size')}>
                        <span>{42.5}</span>
                    </div>
                    <div className={cx('separate')}></div>
                    <div className={cx('condition')}>
                        <span>9.5</span>
                    </div>
                </div>
            </div>
            <div className={cx('instock-and-quantity-selection')}>
                <span>{14} san pham co san</span>
                <div className={cx('quantity-selection')}>
                    <button className={cx('quantity-selection-btn')} onClick={() => decreaseQuantity()}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={cx('quantity')}>{count}</span>
                    <button className={cx('quantity-selection-btn')} onClick={() => increaseQuantity()}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className={cx('action-container')}>
                <Link to={'/checkout'}>
                    <Button buy>Mua ngay</Button>
                </Link>
                <Button buy onClick={() => addToCart()}>
                    Them vao vo hang
                </Button>
            </div>
            <div className={cx('keep-shopping-container')}>
                <div className={cx('keep-shopping')}>
                    <Link to={'/'} className={cx('keep-shopping-text')}>
                        Tiep tuc mua hang
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;
