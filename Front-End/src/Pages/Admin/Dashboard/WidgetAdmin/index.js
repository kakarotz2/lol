import React, { useState, useEffect } from 'react';

import './widget.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp,
    faBalanceScaleLeft,
    faCartArrowDown,
    faCircleDollarToSlot,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

function Widget() {
    // let data;
    const [user, setUser] = useState([]);
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get('/api/users').then((res) => {
            // console.log(res);
            setUser(res.data.length);
        });
        axios.get('/api/order/list').then((res) => {
            setOrder(res.data.length);
        });
        axios.get('/api/products').then((res) => {
            setProduct(res.data.length);
        });
    }, []);
    const diff = 20;
    const widget = [
        {
            title: 'Người dùng',
            className: 'widget',
            isMoney: false,
            link: '/admin/user',
            amout: user || 0,
            icon: faUser,
            color: 'crimson',
            backgroundColor: '#dd838380',
            name: 'Xem tất cả người dùng',
        },
        {
            title: 'Sản phẩm',
            isMoney: false,
            link: '/admin/products',
            amout: product || 0,
            icon: faBalanceScaleLeft,
            color: 'rgb(147 74 227)',
            backgroundColor: 'rgb(188 143 211 / 56%)',
            name: 'Xem tất cả sản phẩm',
        },
        {
            title: 'Đơn hàng',
            isMoney: false,
            link: '/admin/products',
            amout: order || 0,
            icon: faCartArrowDown,
            color: '#b5b762',
            backgroundColor: 'hsl(75deg 81% 75% / 56%)',
            name: 'Xem tất đơn hàng',
        },

        {
            title: 'Thu Nhập',
            isMoney: true,
            link: '/admin/user',
            amout: 0,
            icon: faCircleDollarToSlot,
            color: 'rgb(59 197 50)',
            backgroundColor: 'rgb(147 247 135 / 56%)',
            name: 'Xem tất cả thu nhập',
        },
    ];
    return (
        <React.Fragment>
            {widget.map((item, index) => (
                <div className="widget" key={index}>
                    <div className="left">
                        <span className="title">{item.title}</span>
                        <span className="counter">
                            <CountUp start={0} end={item.amout} duration={2} />
                            {item.isMoney && '$'}
                        </span>
                        <span className="link">
                            <Link to={item.link}>{item.name}</Link>
                        </span>
                    </div>
                    <div className="right">
                        <div className="percentage positive">
                            <FontAwesomeIcon icon={faArrowUp} />
                            {diff}
                        </div>
                        <FontAwesomeIcon
                            icon={item.icon}
                            style={{ color: item.color, backgroundColor: item.backgroundColor }}
                            className="icon"
                        />
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
    // switch (type) {
    //     case 'user':
    //         data = {
    //             title: 'Người dùng',
    //             isMoney: false,
    //             link: <Link to="/admin/user">Xem tất cả người dùng</Link>,
    //             amout: user || 0,
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={faUser}
    //                     className="icon"
    //                     style={{ color: 'crimson', backgroundColor: '#dd838380' }}
    //                 />
    //             ),
    //         };
    //         break;
    //     case 'order':
    //         data = {
    //             title: 'Đơn hàng',
    //             isMoney: false,
    //             link: <Link to="/admin/user">Xem tất cả đơn hàng</Link>,
    //             amout: order || 0,
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={faCartArrowDown}
    //                     className="icon"
    //                     style={{ color: '#b5b762', backgroundColor: 'hsl(75deg 81% 75% / 56%)' }}
    //                 />
    //             ),
    //         };
    //         break;
    //     case 'earning':
    //         data = {
    //             title: 'Thu Nhập',
    //             isMoney: true,
    //             link: 'Xem thu nhập',
    //             amout: 0,
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={faCircleDollarToSlot}
    //                     className="icon"
    //                     style={{ color: 'rgb(59 197 50)', backgroundColor: 'rgb(147 247 135 / 56%)' }}
    //                 />
    //             ),
    //         };
    //         break;
    //     case 'blance':
    //         data = {
    //             title: 'Sản phẩm',
    //             isMoney: false,
    //             link: <Link to="/admin/products">Xem tất cả sản phẩm</Link>,
    //             amout: product,
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={faBalanceScaleLeft}
    //                     className="icon"
    //                     style={{ color: 'rgb(147 74 227)', backgroundColor: 'rgb(188 143 211 / 56%)' }}
    //                 />
    //             ),
    //         };
    //         break;
    //     default:
    //         break;
    // }
    // return (
    //     <div className="widget">
    //         <div className="left">
    //             <span className="title">{data.title}</span>
    //             <span className="counter">
    //                 <CountUp start={0} end={data.amout} duration={2} />
    //                 {data.isMoney && '$'}
    //             </span>
    //             <span className="link">{data.link}</span>
    //         </div>
    //         <div className="right">
    //             <div className="percentage positive">
    //                 <FontAwesomeIcon icon={faArrowUp} />
    //                 {diff}
    //             </div>
    //             {data.icon}
    //         </div>
    //     </div>
    // );
}

export default Widget;
