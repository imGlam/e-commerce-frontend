import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Clothing from '../../components/Clothing/Clothing';

const cx = classNames.bind(styles);

function Home({}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/find')
            .then((res) => res.json())
            .then((products) => setProducts(products))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className={cx('container')}>
            {products.map((product, index) => (
                <div className={cx('inner')} key={index}>
                    <Clothing name={product.name} price={product.price} src={product.image} to={product.name} />
                </div>
            ))}
        </div>
    );
}

export default Home;
