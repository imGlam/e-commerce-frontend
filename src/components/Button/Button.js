import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ className, amount, buy, message, children, cart }) {
    const classes = cx('container', {
        [className]: className,
        amount,
        buy,
        message,
        cart,
    });
    return (
        <div className={cx('container')}>
            <button className={classes}>
                {children || (
                    <img
                        className={cx('icon')}
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=qEeQrWfdFsQAX8u8C3z&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDTDeDwpLnsZ_JYrX2RrJLQ9S2ajJjk0tg_Z3-H9m6oCw&oe=63BDE23D"
                    />
                )}
            </button>
        </div>
    );
}

export default Button;
