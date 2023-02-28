import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CheckoutInfo.module.scss';
import axios from 'axios';

import Button from '../Button';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

const cx = classNames.bind(styles);

function CheckoutInfo() {
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wards, setWards] = useState([]);
    const [orderItems, setOrderItems] = useState([{}]);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    useEffect(() => {
        axios
            .get(`https://vapi.vnappmob.com/api/province`)
            .then((res) => setProvinces(res.data.results))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        axios
            .get(`https://vapi.vnappmob.com/api/province/district/${selectedProvince.province_id}`)
            .then((res) => setDistricts(res.data.results))
            .catch((err) => console.error(err));
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            axios
                .get(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict.district_id}`)
                .then((res) => setWards(res.data.results))
                .catch((err) => console.error(err));
        } else {
            return;
        }
    }, [selectedDistrict]);

    return (
        <div className={cx('container')}>
            <Link className={cx('logo')} to="/">
                Huong CLoset
            </Link>

            <h2 className={cx('title')}>Thong tin khach hang</h2>
            <div className={cx('user-info')}>
                <form method="post" action="/orders/add">
                    <div className={cx('input-field')}>
                        <input className={cx('input')} placeholder="Ten cua ban" name="fullName" />
                    </div>
                    <div className={cx('input-field')}>
                        <input className={cx('input-email')} placeholder="Email" name="email" />
                        <input className={cx('input-phone-number')} placeholder="So dien thoai" name="phoneNumber" />
                    </div>
                    <div className={cx('input-field')}>
                        <input className={cx('input')} placeholder="So nha va ten duong" name="address" />
                    </div>
                    <div className={cx('selection-container')}>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Tinh / Thanh</label>
                            <select
                                className={cx('selection')}
                                name="province"
                                onChange={(e) =>
                                    setSelectedProvince(
                                        provinces.find((province) => province.province_name === e.target.value),
                                    )
                                }
                            >
                                {provinces.map((province, index) => (
                                    <option key={index} value={province.province_name}>
                                        {province.province_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Quan / Huyen</label>
                            <select
                                className={cx('selection')}
                                name="district"
                                onClick={(e) => {
                                    setSelectedDistrict(
                                        districts.find((district) => district.district_name === e.target.value),
                                    );
                                }}
                            >
                                {districts.length ? (
                                    districts.map((district, index) => (
                                        <option key={index} value={district.district_name}>
                                            {district.district_name}
                                        </option>
                                    ))
                                ) : (
                                    <option>Chon quan huyen</option>
                                )}
                            </select>
                        </div>
                        <div className={cx('selection-field')}>
                            <label className={cx('label')}>Phuong / Xa</label>
                            <select className={cx('selection')} name="ward">
                                {wards.length ? (
                                    wards.map((ward, index) => (
                                        <option key={index} value={ward.ward_name}>
                                            {ward.ward_name}
                                        </option>
                                    ))
                                ) : (
                                    <option>Chon phuong xa</option>
                                )}
                            </select>
                        </div>
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
                            <span className={cx('span')}>Thanh toan khi nhan hang [COD]</span>
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
                    
                    <div className={cx('action')}>
                        <Link className={cx('cart')} to="/cart">
                            Gio hang
                        </Link>
                        <Button className={cx('next')} type="submit">
                            HOAN TAT DAT HANG
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckoutInfo;
