
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import AddProductScrean from './screens/AddProductScreen';

function App() {
    return (
        <BrowserRouter>
            <div>
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                                            <li>Free Shipping for all Order of $99</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__right">
                                        <div className="header__top__right__social">
                                            <a href="#section"><i className="fa fa-facebook" /></a>
                                            <a href="#section"><i className="fa fa-twitter" /></a>
                                            <a href="#section"><i className="fa fa-linkedin" /></a>
                                            <a href="#section"><i className="fa fa-pinterest-p" /></a>
                                        </div>
                                        <div className="header__top__right__language">
                                            <img src="img/language.png" alt="" />
                                            <div>English</div>
                                            <span className="arrow_carrot-down" />
                                            <ul>
                                                <li><a href="#section">Spanis</a></li>
                                                <li><a href="#section">English</a></li>
                                            </ul>
                                        </div>
                                        <div className="header__top__right__auth">
                                            <Link to="/signin"><i className="fa fa-user" />Đăng nhập</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="header__logo">
                                    <Link to="/"><img src="/img/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active"><Link to="/">Trang Chủ</Link></li>
                                        <li><a href="./shop-grid.html">Shop</a></li>
                                        <li><a href="#section">Pages</a>
                                            <ul className="header__menu__dropdown">
                                                <li><a href="./shop-details.html">Shop Details</a></li>
                                                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                                <li><a href="./checkout.html">Check Out</a></li>
                                                <li><a href="./blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./blog.html">Blog</a></li>
                                        <li><a href="./contact.html">Liên hệ</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart">
                                    <ul>
                                        <li><a href="#section"><i className="fa fa-heart" /> <span>1</span></a></li>
                                        <li><a href="#section"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                                    </ul>
                                    <div className="header__cart__price">Tổng: <span>$150.00</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="humberger__open">
                            <i className="fa fa-bars" />
                        </div>
                    </div>
                </header>
            </div>
            <section className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                <span className="arrow_carrot-down" />
                                        </div>
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">TÌM KIẾM</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/admin/addProduct" component={AddProductScrean} />

            <footer className="footer spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__about__logo">
                                    <Link to="/"><img src="img/logo.png" alt="" /></Link>
                                </div>
                                <ul>
                                    <li>Address: 60-49 Road 11378 New York</li>
                                    <li>Phone: +65 11.188.888</li>
                                    <li>Email: hello@colorlib.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                            <div className="footer__widget">
                                <h6>Useful Links</h6>
                                <ul>
                                    <li><a href="#section">About Us</a></li>
                                    <li><a href="#section">About Our Shop</a></li>
                                    <li><a href="#section">Secure Shopping</a></li>
                                    <li><a href="#section">Delivery infomation</a></li>
                                    <li><a href="#section">Privacy Policy</a></li>
                                    <li><a href="#section">Our Sitemap</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#section">Who We Are</a></li>
                                    <li><a href="#section">Our Services</a></li>
                                    <li><a href="#section">Projects</a></li>
                                    <li><a href="#section">Contact</a></li>
                                    <li><a href="#section">Innovation</a></li>
                                    <li><a href="#section">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__widget">
                                <h6>Join Our Newsletter Now</h6>
                                <p>Get E-mail updates about our latest shop and special offers.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail" />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__widget__social">
                                    <a href="#section"><i className="fa fa-facebook" /></a>
                                    <a href="#section"><i className="fa fa-instagram" /></a>
                                    <a href="#section"><i className="fa fa-twitter" /></a>
                                    <a href="#section"><i className="fa fa-pinterest" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default App;
