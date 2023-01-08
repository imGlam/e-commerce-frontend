import classNames from 'classnames/bind';
import styles from './HeadingBottom.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Items({ src, title, to, separate }) {
    const classes = cx('items-container', {
        separate,
    });
    return (
        <div className={classes}>
            <Link to={to}>
                <img className={cx('image')} src={src} alt="image" />
            </Link>
            <Link to={to}>
                <span className={cx('title')}>{title}</span>
            </Link>
        </div>
    );
}

Items.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Items;
