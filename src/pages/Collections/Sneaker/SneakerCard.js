import classNames from 'classnames/bind';
import styles from './Sneaker.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SneakerCard({ src, inStock, name, to }) {
    return (
        <div className={cx('card-container')}>
            <Link to={to}>
                <img src={src} className={cx('image')} />
            </Link>
            <h2>So luong : {inStock}</h2>
            <h1 className={cx('name')}>{name}</h1>
        </div>
    );
}

export default SneakerCard;
