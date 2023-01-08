import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Media.module.scss';

import { FacebookIcon, InstaIcon } from '../../../../../components/Icons/';
import Item from '../BrandInfo/Item';

const cx = classNames.bind(styles);

function Media() {
    return (
        <div className={cx('container')}>
            <form>
                <div className={cx('input-area')}>
                    <input className={cx('input')} type="email" name="email" placeholder="Nhap email cua ban..." />
                    <button className={cx('submit-btn')}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
            <div className={cx('media-container')}>
                <p className={cx('text')}>Theo doi chung toi tai : </p>
                <a href="https://www.facebook.com/quynhhuong.nguyendo" className={cx('media-icon')}>
                    <FacebookIcon className={cx('face-icon')} />
                </a>
                <a href="https://www.instagram.com/_jenhng_/" className={cx('media-icon')}>
                    <InstaIcon className={cx('insta-icon')} />
                </a>
            </div>
        </div>
    );
}

export default Media;
