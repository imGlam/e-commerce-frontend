import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import axios from 'axios';

import { ProductsContext } from '../../contexts/productsContext';
import Clothing from '../../components/Clothing/Clothing';

const cx = classNames.bind(styles);

function Home({}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products/get')
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className={cx('container')}>
            {items.map((product, index) => (
                <div className={cx('inner')} key={index}>
                    <Clothing
                        name={product.name}
                        price={product.price}
                        src={product.image}
                        to={product.name}
                        id={product.productId}
                    />
                </div>
            ))}
        </div>
    );
}

export default Home;
