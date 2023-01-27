import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';

import Button from '../../Button';
import { nameContext } from '../../../pages/ProductBuy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';
import useLocalStorage from '../../../hooks/useLocalStorage';

const cx = classNames.bind(styles);

function ProductDescription() {
    const name = useContext(nameContext);
    const cart = useContext(ShoppingCartContext);
    const [product, setProduct] = useState({});
    const productQuantity = cart.getProductsQuantity(product._id);

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
            <div className={cx('content')}>
                <div className={cx('item-info')}>
                    <h2>Price : {product.price}</h2>
                    <p className={cx('description')}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.
                    </p>
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('order-placement')}>
                    <div className={cx('quantity-container')}>
                        <h3 className={cx('amount')}>So luong :</h3>
                        <button
                            className={cx('count-btn')}
                            onClick={(e) => {
                                cart.removeOneFromCart(
                                    product._id,
                                    product.name,
                                    product.description,
                                    product.image,
                                    product.price,
                                    product.size,
                                );
                            }}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faMinus} />
                        </button>
                        <input className={cx('input')} value={productQuantity} onChange={() => {}} />
                        <button
                            className={cx('count-btn')}
                            onClick={(e) => {
                                cart.addOneToCart(
                                    product._id,
                                    product.name,
                                    product.description,
                                    product.image,
                                    product.price,
                                    product.size,
                                );
                            }}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
                        </button>
                    </div>
                    <div className={cx('cart')}>
                        {/* <form method="post" action={`/api/cart/add/${name}`}> */}
                        <Button
                            cart
                            className={cx('cart-btn')}
                            // type="submit"
                            onClick={(e) =>
                                cart.submitOneToCart(
                                    product._id,
                                    product.name,
                                    product.description,
                                    product.image,
                                    product.price,
                                )
                            }
                        >
                            Them vao vo
                        </Button>
                        {/* </form> */}

                        <form method="GET" action={`/api/find/${product.name}`}>
                            <Button buy className={cx('cart-btn')} type="submit">
                                Mua ngay
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;
