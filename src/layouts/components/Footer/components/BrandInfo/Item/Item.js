import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Item({ href, title, icon }) {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <span className={cx('icon')}>{icon}</span>
                <a className={cx('title')} href={href}>
                    <p>{title}</p>
                </a>
            </div>
        </div>
    );
}

Item.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.node.isRequired,
};

export default Item;
