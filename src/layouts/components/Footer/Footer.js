import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import BrandInfo from './components/BrandInfo';
import Media from './components/Media/Media';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('title-container')}>
                <Link className={cx('title')} to="/">
                    <h1>HOME</h1>
                </Link>
                <h1>DANG KY NHAN TIN</h1>
            </div>
            <div className={cx('items-container')}>
                <div className={cx('head')}>
                    <BrandInfo />
                    <Media />
                </div>
                <div className={cx('bottom')}>
                    <span className={cx('copyright-text')}>Copyright &reg; 2023 by iamGIA</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
