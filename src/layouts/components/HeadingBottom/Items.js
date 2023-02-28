import classNames from 'classnames/bind';
import styles from './HeadingBottom.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Items({ title, to, separate, button }) {
    const classes = cx('items-container', {
        separate,
        button,
    });
    return (
        <div className={classes}>
            {button ? (
                <button>{title}</button>
            ) : (
                <Link className={cx('inner')} to={to}>
                    <span className={cx('title')}>{title}</span>
                </Link>
            )}
        </div>
    );
}

Items.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Items;
