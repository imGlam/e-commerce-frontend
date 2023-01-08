import classNames from 'classnames/bind';
import styles from './CheckoutProduct.module.scss';

import Button from '../Button';

const cx = classNames.bind(styles);

function CheckoutProduct() {
    return (
        <div className={cx('container')}>
            <div className={cx('order-selection')}>
                <div className={cx('order-product')}>
                    <img src="https://product.hstatic.net/1000365849/product/11cameliabalo_ebb07c7a124440f2a90a02a233857e12_small.jpg" />
                    <div className={cx('description')}>
                        <h4 className={cx('name')}>Basic Backpage</h4>
                        <span className={cx('color')}>Black</span>
                    </div>
                    <h2 className={cx('price')}>450.000₫</h2>
                </div>
            </div>

            <div className={cx('code-discount')}>
                <input className={cx('input')} />
                <Button className={cx('use-btn')}>Su dung</Button>
            </div>
            <div className={cx('delivery')}>
                <table className={cx('delivery-table')}>
                    <tbody>
                        <tr>
                            <td>
                                <span>Tam tinh</span>
                            </td>
                            <td className={cx('second-td')}>
                                <span>760,000₫</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Phi van chuyen</span>
                            </td>
                            <td className={cx('second-td')}>
                                <span>—</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Tong tien</h3>
                            </td>
                            <td className={cx('second-td')}>
                                <h3>VND 760,000₫</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CheckoutProduct;
