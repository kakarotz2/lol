import './list.scss';
import Navbar from '../../Dashboard/NavbarAdmin';
import Sidebar from '../../Dashboard/SidebarAdmin/index';
import { User } from '../../datasource';

function UserAdmin() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <User />
            </div>
        </div>
    );
}

export default UserAdmin;
