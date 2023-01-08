import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import HeadingTop from '../components/HeadingTop';
import HeadingBottom from '../components/HeadingBottom';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <div className={cx('navbar')}>
                    <Navbar />
                </div>
                <div className={cx('header')}>
                    <HeadingTop />
                    <HeadingBottom />
                </div>
            </div>
            <div className={cx('content')}>{children}</div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
