import Navbar from '../../components/Navbar';
import UserAccount from '../../components/UserAccount';

function MyAccount() {
    return (
        <div>
            <Navbar />
            <UserAccount title="dang nhap" account="email"></UserAccount>
        </div>
    );
}

export default MyAccount;
