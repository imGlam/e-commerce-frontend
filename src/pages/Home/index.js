import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Clothing from '../../components/Clothing/Clothing';
import axios from 'axios';

const cx = classNames.bind(styles);

function Home({}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('/api/find')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
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
