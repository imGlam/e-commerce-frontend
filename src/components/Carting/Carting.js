import classNames from 'classnames/bind';
import styles from './Carting.module.scss';
import Items from './Items/Items';

const cx = classNames.bind(styles);

function Carting() {
    return (
        <div className={cx('container')}>
            <h1>Gio hang cua ban</h1>
            <Items />
        </div>
    );
}

export default Carting;
