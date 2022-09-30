import React from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faArrowRightFromBracket,
    faBell,
    faDashboard,
    faGear,
    faProcedures,
    faReorder,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../../img/logo.png';
import { Link } from 'react-router-dom';

const data = [
    { name: 'Dashboard', link: '/admin', title: 'MAIN', icon: faDashboard },
    { name: 'Người dùng', link: '/admin/user', title: 'LISTS', icon: faUser },
    { name: 'Sản phẩm', link: '/admin/products', icon: faReorder },
    { name: 'Đơn hàng', link: '/admin/order', icon: faProcedures },
    { name: 'Delivery', link: '/admin', icon: faProcedures },
    { name: 'Stats', link: '/admin', title: 'USEFUL', icon: faProcedures },
    { name: 'Thông báo', link: '/admin', icon: faBell },
    { name: 'System Health', link: '/admin', title: 'SERVICE', icon: faProcedures },
    { name: 'Logs', link: '/admin', icon: faProcedures },
    { name: 'Cài đặt', link: '/admin', icon: faGear },
    { name: 'Profile', link: '/admin', title: 'USER', icon: faAddressCard },
    { name: 'Logout', link: '/login', icon: faArrowRightFromBracket },
];
function Ul() {
    return (
        <React.Fragment>
            {data.map((data, index) => (
                <ul key={index}>
                    <p className="title">{data.title}</p>
                    <Link to={data.link}>
                        <li>
                            <FontAwesomeIcon className="icon" icon={data.icon} />
                            <span>{data.name}</span>
                        </li>
                    </Link>
                </ul>
            ))}
        </React.Fragment>
    );
}
function Sidebar() {
    return (
        <div className="sidebars">
            <div className="top">
                <span className="logo">
                    <img src={Logo} alt="" />
                </span>
            </div>
            <hr />
            <div className="center">
                {/* <ul>
                    <p className="title">MAIN</p>
                    <Link to="/admin">
                        <li>
                            <FontAwesomeIcon className="icon" icon={faDashboard} />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/admin/user">
                        <li>
                            <FontAwesomeIcon className="icon" icon={faUser} />
                            <span>Người dùng</span>
                        </li>
                    </Link>
                    <Link to="/admin/products">
                        <li>
                            <FontAwesomeIcon className="icon" icon={faReorder} />
                            <span>Sản phẩm</span>
                        </li>
                    </Link>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faProcedures} />
                        <span>Đơn hàng</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faDashboard} />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faDashboard} />
                        <span>Stats</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        <span>Thông báo</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        <span>System Health</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faDashboard} />
                        <span>Logs</span>
                    </li>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faGear} />
                        <span>Cài đặt</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faAddressCard} />
                        <span>Profile</span>
                    </li>
                    <Link to="/login">
                        <li>
                            <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />
                            <span>Logout</span>
                        </li>
                    </Link>
                </ul> */}
                <Ul />
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
