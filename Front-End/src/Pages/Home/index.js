import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/index';
import SiderBar from '../../Components/SiderBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class HomePage extends React.Component {
    state = {
        listProducts: [],
    };

    async componentDidMount() {
        let data = await axios('http://localhost:8080/api/products');
        console.log(data);
        this.setState({
            listProducts: data.data,
        });
    }
    render() {
        let { listProducts } = this.state;
        var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 5000);
        function Banner() {
            return (
                <div className="pluto-header">
                    <div className="pluto-menu-banner">
                        <SiderBar />
                        <div className="pluto-banner">
                            <div className="menu-banner">
                                <div className="banner">
                                    <input type="radio" name="radio-btn" id="radio1" />
                                    <input type="radio" name="radio-btn" id="radio2" />
                                    <input type="radio" name="radio-btn" id="radio3" />
                                    <input type="radio" name="radio-btn" id="radio4" />
                                    <div class="slide first">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/campustour-sliding-01-31.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="slide">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/690x300_GALAXY-Z-FLIP-4-256GB-FLEX-MODE-COLLECTION-final.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="slide">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/xiaomi12tbooking-sliding.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="slide">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/tivi%20samsung.png"
                                            alt=""
                                        />
                                    </div>
                                    {/* <div class="navigation-auto">
                                        <div class="auto-btn1"></div>
                                        <div class="auto-btn2"></div>
                                        <div class="auto-btn3"></div>
                                        <div class="auto-btn4"></div>
                                    </div> */}
                                    {/* <div class="navigation-manual">
                                        <label for="radio1" class="manual-btn"></label>
                                        <label for="radio2" class="manual-btn"></label>
                                        <label for="radio3" class="manual-btn"></label>
                                        <label for="radio4" class="manual-btn"></label>
                                    </div> */}
                                </div>
                            </div>
                            <div className="banner-left">
                                <div className="banner-left-items">
                                    <img
                                        src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/Fold3.png"
                                        alt="logo"
                                    />
                                </div>
                                <div className="banner-left-items ">
                                    <img
                                        src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/rightbanner-des-ipapro11.png"
                                        alt="logo"
                                    />
                                </div>
                                <div className="banner-left-items">
                                    <img
                                        src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/zenbook%2014.png"
                                        alt="logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <React.Fragment>
                <Header />
                <div className="pluto-wrap">
                    <Banner />
                    <div className="banners">
                        <img
                            src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/Special-Banner-des-iphone-combo.png"
                            alt="banner"
                        />
                    </div>
                    <div className="show-product">
                        <p>DANH MỤC ĐIỆN THOẠI</p>
                        <div className="product-list">
                            <Link to="." className="product-item">
                                <p>iPhone</p>
                            </Link>
                            <Link to="." className="product-item">
                                <p>SamSung</p>
                            </Link>
                            <Link to="." className="product-item">
                                <p>OPPO</p>
                            </Link>
                            <Link to="." className="product-item">
                                <p>Xem tất cả...</p>
                            </Link>
                        </div>
                    </div>
                    <div className="pluto-list-items">
                        <div className="menu-items">
                            {listProducts.map((item) => (
                                <Link to={'/product/' + item._id} className="menu-item" key={item._id}>
                                    <div className="item-products">
                                        <div className="item-product">
                                            <img src={item.url} alt=":)" />
                                            <div className="name-product">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="price-product">{item.price}&#8363;</div>
                                            <div className="discription-product">{item.discription}</div>
                                            <div className="ratting">
                                                <FontAwesomeIcon className="ratting-start" icon={faStar} />
                                                <FontAwesomeIcon className="ratting-start" icon={faStar} />
                                                <FontAwesomeIcon className="ratting-start" icon={faStar} />
                                                <FontAwesomeIcon className="ratting-start" icon={faStar} />
                                                <FontAwesomeIcon className="ratting-start" icon={faStar} />
                                                12 đánh giá
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePage;
