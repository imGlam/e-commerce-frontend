import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Clothing.module.scss';

const cx = classNames.bind(styles);

function Clothing({ src, price, name }) {
    return (
        <div className={cx('container')}>
            <Link to={`/product/${name}`}>
                <img className={cx('image')} src={src} />
            </Link>
            <h1 className={cx('name')}>{name}</h1>
            <span className={cx('price')}>{price}</span>
        </div>
    );
}

export default Clothing;
