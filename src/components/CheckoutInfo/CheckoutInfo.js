import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CheckoutInfo.module.scss';

import Button from '../Button';

const cx = classNames.bind(styles);

function CheckoutInfo() {
    return (
        <div className={cx('container')}>
            <Link className={cx('logo')} to="/">
                Huong CLoset
            </Link>

            <h2 className={cx('title')}>Thong tin khach hang</h2>
            <div className={cx('user-info')}>
                <form>
                    <div className={cx('input-field')}>
                        <input className={cx('input')} placeholder="Ten cua ban" />
                    </div>
                    <div className={cx('input-field')}>
                        <input className={cx('input-email')} placeholder="Email" />
                        <input className={cx('input-phone-number')} placeholder="So dien thoai" />
                    </div>
                    <div className={cx('input-field')}>
                        <input className={cx('input')} placeholder="So nha va ten duong" />
                    </div>
                    <div className={cx('selection-container')}>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Tinh / Thanh</label>
                            <select className={cx('selection')} name="province">
                                <option value="">Chon tinh thanh</option>
                                <option value="HCM">Ho Chi Minh</option>
                                <option value="HN">Ha Noi</option>
                            </select>
                        </div>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Quan / Huyen</label>
                            <select className={cx('selection')} name="province">
                                <option value="">Chon tinh thanh</option>
                                <option value="HCM">Ho Chi Minh</option>
                                <option value="HN">Ha Noi</option>
                            </select>
                        </div>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Phuong / Xa</label>
                            <select className={cx('selection')} name="province">
                                <option value="">Chon tinh thanh</option>
                                <option value="HCM">Ho Chi Minh</option>
                                <option value="HN">Ha Noi</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <Link className={cx('cart')} to="/cart">
                            Gio hang
                        </Link>
                        <Button className={cx('next')}>Tiep tuc</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutInfo;
