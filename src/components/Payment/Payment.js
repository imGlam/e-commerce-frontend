import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';

const cx = classNames.bind(styles);

function Payment() {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    return (
        <div className={cx('container')}>
            <div className={cx('method-container ')}>
                <form method="POST" action="/api/orders/create/step_2">
                    <div className={cx('table-container')}>
                        <h2 className={cx('title')}>Phuong thuc van chuyen</h2>
                        <table className={cx('table')}>
                            <thead>
                                <tr>
                                    <th className={cx('thead-left')}></th>
                                    <th className={cx('thead')}>Hinh thuc van chuyen</th>
                                    <th className={cx('thead')}>Chi phi van chuyen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx('tbody-left')}>
                                        <input type="radio" value="Giao hang tiet kiem" name="transportation" />
                                    </td>
                                    <td className={cx('tbody')}>Giao hang tiet kiem</td>
                                    <td className={cx('tbody')}>30.000d</td>
                                </tr>
                                <tr>
                                    <td className={cx('tbody-left')}>
                                        <input type="radio" value="Giao hang nhanh" name="transportation" />
                                    </td>
                                    <td className={cx('tbody')}>Giao hang nhanh</td>
                                    <td className={cx('tbody')}>40.000d</td>
                                </tr>
                                <tr>
                                    <td className={cx('tbody-left')}>
                                        <input type="radio" value="Hoa toc" name="transportation" />
                                    </td>
                                    <td className={cx('tbody')}>Hoa toc</td>
                                    <td className={cx('tbody')}>60.000d</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={cx('payment-methods-container')}>
                        <h2 className={cx('title')}>Phuong thuc thanh toan</h2>
                        <div
                            className={cx('by-cash')}
                            onClick={(e) => {
                                setChecked(true);
                                setChecked2(false);
                            }}
                        >
                            <input type="radio" name="payment" value="cash" checked={checked} onChange={(e) => {}} />
                            <img
                                className={cx('img')}
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                            />
                            <span className={cx('span')}>Thanh toan khi nhan hang</span>
                        </div>
                        <div
                            className={cx('by-credit')}
                            onClick={(e) => {
                                setChecked(false);
                                setChecked2(true);
                            }}
                        >
                            <input type="radio" name="payment" value="credit" checked={checked2} onChange={() => {}} />
                            <img
                                className={cx('img')}
                                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                            />
                            <span className={cx('span')}>Chuyen khoan </span>
                        </div>
                    </div>
                    <button className={cx('btn')} type="submit">
                        HOAN TAT DAT HANG
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Payment;
