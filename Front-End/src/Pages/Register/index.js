import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import Loading from '../../Components/Loading/loading';
import './register.scss';

function RegisterPage() {
    const navigate = useNavigate();
    // post data
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cpapassword: '',
        },
        [],
    );
    const [error, setError] = useState('');

    const handleInputs = (e) => {
        let data, value;
        data = e.target.name;
        value = e.target.value;
        setUser({ ...user, [data]: value });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { firstName, lastName, email, password, cpapassword, userName, numberPhone, adress } = user;

        try {
            if (password === cpapassword) {
                await axios.post('api/user/register', {
                    email,
                    password,
                    firstName,
                    lastName,
                    userName,
                    numberPhone,
                    adress,
                });
                setIsLoading(false);
                navigate('/login');
            } else {
                setIsLoading(false);
                setError('Mật khẩu không trùng khớp');
            }
        } catch (err) {
            setIsLoading(false);
            setError(err.response.data.message);
        }
    };

    return (
        <div className="abc">
            <Header />
            <div className="register-wrap">
                {isLoading ? <Loading /> : ''}
                <div className="register-content">
                    <div className="register-form">
                        <h2>Đăng Kí Ngay</h2>
                        <form className="form" id="form">
                            <div className="rows">
                                <div className="name-input" id="name-input">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control "
                                        placeholder="Họ"
                                        value={user.firstName}
                                        onChange={handleInputs}
                                    />
                                </div>
                                <div className="name-input">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control "
                                        placeholder="Tên"
                                        value={user.lastName}
                                        onChange={handleInputs}
                                    />
                                </div>
                            </div>
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    className="form-control "
                                    placeholder="userName"
                                    value={user.userName}
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control "
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    className="form-control"
                                    autoComplete="on"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    value={user.password}
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    className="form-control"
                                    autoComplete="on"
                                    name="cpapassword"
                                    type="password"
                                    placeholder="Xác nhận Mật khẩu"
                                    value={user.cpapassword}
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    className="form-control"
                                    id="adress"
                                    name="adress"
                                    type="text"
                                    placeholder="địa chỉ"
                                    value={user.adress}
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    className="form-control"
                                    name="numberPhone"
                                    id="numberPhone"
                                    type="number"
                                    placeholder="so dien thoai"
                                    value={user.numberPhone}
                                    onChange={handleInputs}
                                />
                            </div>

                            <div>
                                <button className="submit" onClick={handleClick}>
                                    Đăng kí
                                </button>
                                <p style={{ color: 'red', fontSize: '16px', fontWeight: '700' }}>{error}</p>
                            </div>

                            <Link to="/login">
                                <p
                                    style={{
                                        color: '#030816',
                                        fontWeight: '700',
                                        fontSize: '24px',
                                        float: 'right',
                                        marginTop: '12px',
                                    }}
                                >
                                    Đăng nhập
                                </p>
                            </Link>
                            <div className="text-content">
                                <p>Hoặc đăng kí với</p>
                                <div className="list-items">
                                    <button className="btn-list-icon">
                                        <Link to="/">
                                            <FontAwesomeIcon className="icons-color" icon={faFacebook} />
                                        </Link>
                                    </button>
                                    <button className="btn-list-icon">
                                        <Link to="/">
                                            <FontAwesomeIcon className="icons-color" icon={faGoogle} />
                                        </Link>
                                    </button>
                                    <button className="btn-list-icon">
                                        <Link to="/">
                                            <FontAwesomeIcon className="icons-color" icon={faTwitter} />
                                        </Link>
                                    </button>
                                    <button className="btn-list-icon">
                                        <Link to="/">
                                            <FontAwesomeIcon className="icons-color" icon={faGithub} />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RegisterPage;
