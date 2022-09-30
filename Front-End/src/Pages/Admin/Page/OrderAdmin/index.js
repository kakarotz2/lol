import './list.scss';
import Navbar from '../../Dashboard/NavbarAdmin';
import Sidebar from '../../Dashboard/SidebarAdmin/index';
import { Order } from '../../datasource';

function OrderAdmin() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Order />
            </div>
        </div>
    );
}

export default OrderAdmin;
