import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Modal, Button } from 'react-bootstrap';

function User() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataUser, setDataUser] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then((res) => {
            setUser(res.data);
        });
    }, []);

    useEffect(() => {
        let res = user.map((item, index) => {
            return {
                _id: item._id,
                id: index + 1,
                userName: item.userName,
                name: item.firstName + ' ' + item.lastName,
                email: item.email,
                role: item.role,
                number: '0' + item.numberPhone || 'Không có',
                adress: item.adress || '18 Phố Viên',
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status || 'Đang hoạt động',
            };
        });
        setDataUser(res);
    }, [user]);

    const loadData = () => {
        axios.get('/api/users').then((data) => {
            setUser(data.data);
        });
        let res = user.map((item, index) => {
            return {
                _id: item._id,
                id: index + 1,
                userName: item.userName,
                name: item.firstName + ' ' + item.lastName,
                email: item.email,
                role: item.role,
                number: '0' + item.numberPhone || 'Không có',
                adress: item.adress || '18 Phố Viên',
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status || 'Đang hoạt động',
            };
        });
        setDataUser(res);
    };

    const handlerDelete = async () => {
        const [id] = dataUser;
        await axios.delete('/api/admin/user/delete', { data: { _id: id } }).then(() => {
            loadData();
            console.log(id);
        });
        setShow(false);
    };

    const userColumns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Họ Và Tên',
            width: 196,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 196,
        },
        {
            field: 'userName',
            headerName: 'User Name',
            width: 124,
        },

        {
            field: 'role',
            headerName: 'Chức vụ',
            width: 124,
            height: 12,
        },
        {
            field: 'number',
            headerName: 'Số điện thoại',
            width: 156,
        },
        {
            field: 'adress',
            headerName: 'Địa chỉ',
            width: 240,
        },
        {
            field: 'createAt',
            headerName: 'Ngày tạo',
            width: 124,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 162,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Button variant="" className="viewButton">
                            <FontAwesomeIcon icon={faEye} />
                        </Button>
                        <Button variant="" className="editButton">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                        <Button variant="" className="deleteButton" onClick={handleShow}>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Xóa Người Dùng</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Bạn có muốn xóa tài khoản này?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Hủy
                                </Button>
                                <Button variant="primary" onClick={handlerDelete}>
                                    Đồng ý
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                );
            },
        },
    ];
    return (
        <React.Fragment>
            <div className="datatable">
                <div className="datatableTitle">
                    <p className="animate-charcter">Danh mục người dùng</p>
                    <Link to="/admin/user/new" className="link">
                        Thêm mới
                    </Link>
                </div>
                <DataGrid
                    nonce="no data"
                    className="datagrid"
                    rows={dataUser}
                    columns={userColumns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    );
}

function Product() {
    const [dataProduct, setDataProduct] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProduct(res.data);
        });
    }, []);

    useEffect(() => {
        let res = product.map((item, index) => {
            return {
                id: index + 1,
                name: item.name,
                img: item.url,
                trademark: item.trademark,
                type: item.type,
                price: item.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                }),
                amount: item.amount,
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status || 'Đang hoạt động',
            };
        });
        setDataProduct(res);
    }, [product]);
    const productColumns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            width: 196,
        },
        {
            field: 'img',
            headerName: 'Hình ảnh',
            width: 196,
            renderCell: (params) => {
                return <img style={{ width: 72 }} src={params.row.img} alt="d" />;
            },
        },
        {
            field: 'trademark',
            headerName: 'Thương hiệu',
            width: 124,
        },
        {
            field: 'type',
            headerName: 'Nhà cung cấp',
            width: 162,
        },

        {
            field: 'amount',
            headerName: 'Số lượng',
            width: 100,
        },
        {
            field: 'price',
            headerName: 'Đơn giá',
            width: 124,
        },
        {
            field: 'createAt',
            headerName: 'Ngày tạo',
            width: 124,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 162,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 240,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/admin/products/single" style={{ textDecoration: 'none' }}>
                            <div className="viewButton" title="Xem">
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </Link>
                        <Link to="/admin/product/single" style={{ textDecoration: 'none' }}>
                            <div className="editButton" title="Sửa">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                        </Link>
                        <button className="deleteButton" title="Xóa">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <React.Fragment>
            <div className="datatable">
                <div className="datatableTitle">
                    <p className="animate-charcter">Danh mục sản phẩm</p>
                    <Link to="/admin/products/new" className="link">
                        Thêm mới
                    </Link>
                </div>
                <DataGrid
                    rowHeight={96}
                    className="datagrid"
                    rows={dataProduct}
                    columns={productColumns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    );
}

// all product

function Order() {
    const [dataOrder, setDataOrder] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get('/api/order/list').then((res) => {
            setOrder(res.data);
        });
    }, []);
    useEffect(() => {
        let res = order.map((item, index) => {
            return {
                id: index + 1,
                name: item.name,
                product: item.product,
                paymentMethod: item.paymentMethod,
                phonenumber: item.phonenumber,
                price: item.price || 'free',
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status,
            };
        });
        setDataOrder(res);
    }, [order]);

    const orderColumns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Tên khách hàng',
            width: 196,
        },
        {
            field: 'product',
            headerName: 'Tên sản phẩm',
            width: 196,
        },
        {
            field: 'price',
            headerName: 'Giá',
            width: 124,
        },
        {
            field: 'paymentMethod',
            headerName: 'Thanh toán',
            width: 162,
        },

        {
            field: 'phonenumber',
            headerName: 'Số điện thoại',
            width: 124,
        },

        {
            field: 'adress',
            headerName: 'Địa chỉ nhận hàng',
            width: 240,
        },
        {
            field: 'createAt',
            headerName: 'Ngày mua',
            width: 124,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 162,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/admin/products/single" style={{ textDecoration: 'none' }}>
                            <div className="viewButton" title="Xem">
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </Link>
                        <Link to="/admin/product/single" style={{ textDecoration: 'none' }}>
                            <div className="editButton" title="Sửa">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                        </Link>
                        <button className="deleteButton" title="Xóa">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <React.Fragment>
            <div className="datatable">
                <div className="datatableTitle">
                    <p className="animate-charcter">Danh mục đơn hàng</p>
                    <Link to={'link'} className="link">
                        Thêm mới
                    </Link>
                </div>
                <DataGrid
                    className="datagrid"
                    rows={dataOrder}
                    columns={orderColumns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    );
}
export { User, Product, Order };
