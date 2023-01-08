import classNames from 'classnames/bind';
import styles from './BrandInfo.module.scss';
import Item from './Item/Item';

import { LocationIcon, PhoneIcon, EmailIcon } from '../../../../../components/Icons';

const cx = classNames.bind(styles);

function BrandInfo() {
    return (
        <div className={cx('container')}>
            <Item icon={<LocationIcon />} title="Dia Chi : 2/39 Hell Street" />
            <Item icon={<PhoneIcon />} title="Dien thoai : 0966440814" />
            <Item icon={<EmailIcon />} title="Gmail : gialamhuynh3004@gmail.com" />
        </div>
    );
}

export default BrandInfo;
