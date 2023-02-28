import classNames from 'classnames/bind';
import styles from './CheckoutLayout.module.scss';

import CheckoutProduct from '../../components/CheckoutProduct/';
import Button from '../../components/Button';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function CheckoutLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('content-container')}>
                <div className={cx('content')}>{children}</div>
                <div className={cx('separate')}></div>
                <div className={cx('checkout-product-container')}>
                    <CheckoutProduct />
                    <div className={cx('code-discount-container')}>
                        <div className={cx('code-discount')}>
                            <input className={cx('input-discount')} placeholder={'Nhap ma giam gia'} />
                            <Button className={cx('use-btn')} buy>
                                SU DUNG
                            </Button>
                        </div>
                        <div className={cx('delivery')}>
                            <table className={cx('delivery-table')}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>Tam tinh</span>
                                        </td>
                                        <td className={cx('second-td')}>
                                            <span>{}</span>
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
                                            <h3>{}</h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutLayout;
