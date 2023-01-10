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
                        src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/320917491_716554459677195_2732882664084446549_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E_yDtxmMdT0AX8UT12C&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBgxu39JAznft0eWzQpFWXDjj2mDZW69e2nXmK4aZ6FqA&oe=63C11B5A"
                        alt="qgounh"
                    ></img>
                </a>
            </div>
        </div>
    );
}

export default HeadingTop;
