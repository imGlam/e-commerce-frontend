import classNames from 'classnames/bind';
import styles from './HeadingBottom.module.scss';
import Items from './Items';

const cx = classNames.bind(styles);

function HeadingBottom() {
    return (
        <div className={cx('container')}>
            <Items
                src="https://theme.hstatic.net/1000365849/1000614631/14/baloden.svg?v=139"
                title="Backpacks"
                to="/collection/backpacks"
                separate
            />
            <Items
                src="https://theme.hstatic.net/1000365849/1000614631/14/viden.svg?v=139"
                title="Wallets"
                separate
                to="/collection/wallets"
            />
            <Items
                src="https://theme.hstatic.net/1000365849/1000614631/14/tuixachden.svg?v=139"
                title="Tote&Accessories"
                to="/collection/tote-accessories"
                separate
            />
            <Items
                src="https://theme.hstatic.net/1000365849/1000614631/14/tuicheoden.svg?v=139"
                title="Crossbody bags"
                to="/collection/crossbody-bags"
            />
        </div>
    );
}

export default HeadingBottom;
