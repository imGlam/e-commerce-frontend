import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeadingBottom.module.scss';
import Items from './Items';

const cx = classNames.bind(styles);

function HeadingBottom() {
    return (
        <div className={cx('container')}>
            <Items to="/top" title="Top"></Items>
            <Items to="/bottom" title="Bottom"></Items>
            <Tippy
                hideOnClick={true}
                hideOnClickOutside={true}
                trigger="mouseenter"
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('tippy-container')}>
                        {/* <Items title="Vans" to="/sneaker/?q=vans"></Items>  */}
                        <div className={cx('tippy-item')}>
                            <Link className={cx('tippy-item-link')} to={'/sneaker/?q=vans'}>
                                Vans
                            </Link>
                        </div>
                        <div className={cx('tippy-item')}>
                            <Link className={cx('tippy-item-link')} to={'/sneaker/?q=vans'}>
                                Adidas
                            </Link>
                        </div>
                        <div className={cx('tippy-item')}>
                            <Link className={cx('tippy-item-link')} to={'/sneaker/?q=vans'}>
                                Nike
                            </Link>
                        </div>
                    </div>
                )}
            >
                <button className={cx('btn')}>Sneaker</button>
            </Tippy>
            <Items to="/accessories" title="Accessories"></Items>
        </div>
    );
}

export default HeadingBottom;
