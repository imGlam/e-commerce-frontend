import classNames from 'classnames/bind';
import styles from './HeadingTop.module.scss';

const cx = classNames.bind(styles);

function HeadingTop() {
    return (
        <div className={cx('container')}>
            <div className={cx('heading-top')}>
                <a href="/">
                    <img className={cx('logo')} src="blackLogo.png"></img>
                </a>
                <h1 className={cx('slogan')}>Young , wild and Free</h1>
            </div>
        </div>
    );
}

export default HeadingTop;
