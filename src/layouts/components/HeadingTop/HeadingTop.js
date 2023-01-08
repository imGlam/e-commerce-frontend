import classNames from 'classnames/bind';
import styles from './HeadingTop.module.scss';

const cx = classNames.bind(styles);

function HeadingTop() {
    return (
        <div className={cx('container')}>
            <div className={cx('heading-top')}>
                <a href="https://www.tiktok.com/@gnouh18">
                    <img
                        className={cx('logo')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7d7a25ad544bc57c33c6f8c17ac358e0~c5_100x100.jpeg?x-expires=1673265600&x-signature=rbS206VE06RKAPvErzEUTGdQnHI%3D"
                    ></img>
                </a>
            </div>
        </div>
    );
}

export default HeadingTop;
