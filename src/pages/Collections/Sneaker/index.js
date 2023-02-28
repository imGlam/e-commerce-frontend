import { useEffect, useState } from 'react';
import Product from '../../../components/Product';
import ProductsContainer from '../../../components/ProductsContainer';
import SneakerCard from './SneakerCard';

function Sneaker() {
    return (
        <div>
            <ProductsContainer name={'Vans'}>
                <SneakerCard
                    name={'Vans Old Skool'}
                    inStock={12}
                    src={
                        'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg?v=1661757331000'
                    }
                    to={'/sneaker/vans'}
                />
                <SneakerCard
                    name={'Vans Old Skool'}
                    inStock={12}
                    src={
                        'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg?v=1661757331000'
                    }
                    to={'/sneaker/vans'}
                />
                <SneakerCard
                    name={'Vans Old Skool'}
                    inStock={12}
                    src={
                        'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg?v=1661757331000'
                    }
                    to={'/sneaker/vans'}
                />
                <SneakerCard
                    name={'Vans Old Skool'}
                    inStock={12}
                    src={
                        'https://bizweb.dktcdn.net/thumb/large/100/140/774/products/vans-old-skool-black-white-vn000d3hy28-1.jpg?v=1661757331000'
                    }
                    to={'/sneaker/vans'}
                />
            </ProductsContainer>
        </div>
    );
}

export default Sneaker;
