import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './UserAccount.module.scss';

const cx = classNames.bind(styles);

function UserAccount({ title, account }) {
    return (
        <div className={cx('container')}>
            <h1>{title}</h1>
            <form>
                <label>{account}</label>
                <input type="email" />
                <p></p>
                <p>
                    <label>Password</label>
                    <input />
                </p>
                <button>{title}</button>
                <div>
                    <p>GHI NHO MAT KHAU</p>
                    <Link to="/my-account/lost-password">QUEN MAT KHAU</Link>
                </div>
            </form>
        </div>
    );
}

export default UserAccount;
