import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../img/logo.png';
import './header.scss';
import { faNewspaper, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <div className="container-new  none block">
                    <Link to="/">
                        <div className="new1">
                            <FontAwesomeIcon className="icons-header" icon={faNewspaper} />
                            Tin tức
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="contract">
                            <FontAwesomeIcon className="icons-header" icon={faFacebook} />
                            Facebook fanpage
                        </div>
                    </Link>
                    <a href="tel:+84969938892">
                        <div className="number-phone">
                            <FontAwesomeIcon className="icons-header" icon={faPhone} />
                            CSKH: 0969.938.892
                        </div>
                    </a>
                </div>
            </div>
            <header className="heading">
                <div className="heading-wrap">
                    <div className="heading-container">
                        <Link to="/">
                            <div className="logo">
                                <img src={Logo} alt="logo" />
                            </div>
                        </Link>
                        <form className="search">
                            <FontAwesomeIcon className="icon-search" icon={faSearch} />
                            <input className="input-search" placeholder="Bạn muốn tìm gì?" />
                        </form>
                        <Link to="/">
                            <div className="service heading-1">Dịch vụ</div>
                        </Link>
                        <Link to="/">
                            <div className="product heading-1">Sản phẩm</div>
                        </Link>
                        <Link to="/">
                            <div className="cart heading-1">Giỏ hàng</div>
                        </Link>

                        <Link to="/">
                            <div className="service heading-1">Về chúng tôi</div>
                        </Link>
                        <Link to="/login">
                            <div className="login log-res">Đăng nhập</div>
                        </Link>
                        <Link to="/register">
                            <div className="register log-res">Đăng kí</div>
                        </Link>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
