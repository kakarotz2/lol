import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import Loading from '../../Components/Loading/loading';

function Login() {
    const navigate = useNavigate();
    const [userName, setUserNamel] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handlerInput = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios.post('/api/user/login', { userName, password });
            setIsLoading(false);

            navigate('/admin');

            localStorage.setItem('accessToken', JSON.stringify(data));
        } catch (err) {
            setIsLoading(false);
            setError(err.response.data.message);
        }
    };

    return (
        <div className="abc">
            <Header />
            <div className="login-wrap">
                {isLoading ? <Loading /> : ''}
                <div className="login-content">
                    <div className="login-img">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            alt="logo"
                        />
                    </div>
                    <div className="login-form">
                        <h2>Đăng Nhập</h2>
                        <form method="POST" className="form">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="form3Example4"
                                    name="userName"
                                    className="form-control form-control-lg"
                                    placeholder="Tên tài khoản"
                                    value={userName}
                                    onChange={(e) => setUserNamel(e.target.value)}
                                />
                            </div>
                            <div className="form-outline">
                                <input
                                    className="form-control form-control-lg "
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    autoComplete="on"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-checked">
                                <div className="save-account">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                        autocompleted=""
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <div className="forgot-account">
                                    <Link to=".">
                                        <h5>Quên mật khẩu?</h5>
                                    </Link>
                                </div>
                            </div>
                            <button className="submit" type="button" onClick={handlerInput} disabled={isLoading}>
                                Đăng Nhập
                            </button>
                            {<p style={{ color: 'red', fontWeight: '600' }}>{error}</p>}
                            <Link to="/register">
                                <p
                                    style={{
                                        color: '#165ed1',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                        margin: '24px 0',
                                    }}
                                >
                                    Bạn chưa có tài khoản? <span style={{ color: 'red' }}>Đăng kí</span>
                                </p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Login;
