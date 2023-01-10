import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';

import Button from '../../Button';
import { nameContext } from '../../../pages/ProductBuy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDescription() {
    const name = useContext(nameContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`/api/find/${name}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .catch((err) => console.log(err));
    }, [name]);

    return (
        <div className={cx('container')}>
            <div className={cx('name')}>
                <h1>{product.name}</h1>
            </div>
            <div className={cx('price')}>
                <h1>{product.price}</h1>
            </div>
            <div className={cx('description')}>
                <p>{product.description}</p>
            </div>
            <div className={cx('color')}></div>
            <div className={cx('amount')}>
                <span>So luong</span>
                <div className={cx('amount-selection')}>
                    <Button amount>
                        <FontAwesomeIcon className={cx('icon')} icon={faMinusCircle} />
                    </Button>
                    <input className={cx('input')} />
                    <Button amount>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlusCircle} />
                    </Button>
                </div>
            </div>
            <div className={cx('action')}>
                <Button cart>Them vao gio</Button>
                <Link to={`/checkout/${name}`}>
                    <Button buy>Mua ngay</Button>
                </Link>
            </div>
        </div>
    );
}

export default ProductDescription;
