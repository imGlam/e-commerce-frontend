import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';

import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MessageIcon } from '../../Icons/Icons';

const cx = classNames.bind(styles);

function ProductDescription() {
    return (
        <div className={cx('container')}>
            <div className={cx('name')}>
                <h1>New Original Backpack</h1>
            </div>
            <div className={cx('price')}>
                <h1>460,000₫</h1>
            </div>
            <div className={cx('description')}>
                <p>
                    Đủ nhỏ gọn để bạn không cảm thấy cồng kềnh, đủ rộng rãi để có thể cùng bạn ''cân'' mọi thứ trên vai,
                    tạo nên New Orginal Backpack™ - chiếc balo Camelia vừa ra mắt trong bộ sưu tập mới , với thiết kế đa
                    ngăn thông minh dành cho những người trẻ đa nhiệm. - Kích thước: 42 x 28 x 16 cm - Chất liệu:
                    Camelia's fabric - Ngăn chống sốc: Đựng vừa laptop 14” - Nhiều ngăn nhỏ tiện lợi phía trong balo
                </p>
            </div>
            <div className={cx('color')}></div>
            <div className={cx('amount')}>
                <span>So luong</span>
                <div className={cx('amount-selection')}>
                    <Button amount>
                        <FontAwesomeIcon className={cx('icon')} icon={faMinusCircle} />
                    </Button>
                    <input className={cx('input')} />
                    <Button amount>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlusCircle} />
                    </Button>
                </div>
            </div>
            <div className={cx('action')}>
                <Button cart>Them vao gio</Button>
                <Button buy>Mua ngay</Button>
            </div>
        </div>
    );
}

export default ProductDescription;
