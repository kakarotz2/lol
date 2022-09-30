import './list.scss';
import Navbar from '../../Dashboard/NavbarAdmin';
import Sidebar from '../../Dashboard/SidebarAdmin/index';
import { Product } from '../../datasource';

function ProductAdmin() {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Product />
            </div>
        </div>
    );
}

export default ProductAdmin;
