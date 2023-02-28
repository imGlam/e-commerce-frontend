import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Product from '../../../components/Product';
import ProductsContainer from '../../../components/ProductsContainer';
import styles from './Sneaker.module.scss';

const cx = classNames.bind(styles);

function Vans() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/products/get')
            .then((res) => res.json())
            .then((res) => setItems(res))
            .catch((err) => console.error(err));
    }, []);
    return (
        <ProductsContainer>
            {items.map((item, index) => (
                <Product
                    key={index}
                    name={item.name}
                    price={item.price}
                    src={item.image}
                    size={42.5}
                    cond={'9 / 10'}
                    to={`/product/${item.productId}`}
                    inStock={1}
                />
            ))}
        </ProductsContainer>
    );
}

export default Vans;
