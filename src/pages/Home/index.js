import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import ProductsContainer from '../../components/ProductsContainer';

const cx = classNames.bind(styles);

function Home({}) {
    return (
        <div className={cx('container')}>
            <ProductsContainer></ProductsContainer>
        </div>
    );
}

export default Home;
