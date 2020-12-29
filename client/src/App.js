
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import AddProductScrean from './screens/AddProductScreen';
import ManagerProduct from './screens/ManagerProduct';
import { useDispatch, useSelector } from 'react-redux';
import ManageUserScreen from './screens/ManageUserScreen';
import UpdateProduct from './screens/UpdateProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import SearchBar from './screens/SearchSreen';
import { listProducts } from './actions/productActions';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ThankYou from './screens/ThankYou';
import AdminOderScreen from './screens/AminOderScreen';
import { useEffect } from 'react';
import { userLogOut } from './actions/userActions';
import FogotPasswordScreen from './screens/FogotPasswordScreen';
import EnterCodeResetPasswordScreen from './screens/EnterCodeResetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const handleHome = () => {
        dispatch(listProducts());
    }
    const LogOut = () => {
        dispatch(userLogOut());
    }
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

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
                                            <li><i className="fa fa-envelope" /> NS3AE@gmail.com</li>
                                            <li>Free ship cho đơn trên 500k</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__right">

                                        <div className="header__top__right__social">
                                            <a href="https://www.facebook.com"><i className="fa fa-facebook" /></a>

                                        </div>

                                        <div className="header__top__right__auth">

                                            {
                                                userInfo ? (
                                                    <div className="row" >
                                                        <Link to="#" style={{ "color": "red" }}>{userInfo.name}</Link>
                                                        <span>&nbsp;</span>
                                                        <Link to='/' onClick={LogOut} style={{ "margin-left": "5px" }}>Đăng xuất</Link>
                                                    </div>
                                                ) : (
                                                        <div className="d-flex">
                                                            <Link to="/register" className="auth-item">Đăng ký</Link>
                                                            <span>|</span>
                                                            <Link to="/signin" className="auth-item">Đăng nhập</Link>
                                                        </div>
                                                    )
                                            }

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
                                    <Link to='/' onClick={handleHome}><img src="/img/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active"><Link to="/">Trang Chủ</Link></li>

                                        <li><Link href="./contact.html">Liên hệ</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart">
                                    <ul>

                                        <li><Link to="/cart"><i className="fa fa-shopping-bag" /> <span>3</span></Link></li>
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
            <SearchBar />

            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/fogot_password" component={FogotPasswordScreen} />
            <Route path="/enter_code" component={EnterCodeResetPasswordScreen} />
            <Route path="/reset_password" component={ResetPasswordScreen} />
            <Route path="/confirm-email" component={ConfirmEmailScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/admin/addProduct" component={AddProductScrean} />
            <Route path="/admin/managerProduct" component={ManagerProduct} />
            <Route path="/admin/manage-user" component={ManageUserScreen} />
            <Route path="/admin/updateProduct/:id" component={UpdateProduct} />
            <Route path="/order-history" component={OrderHistoryScreen} />
            <Route path="/checkout" component={CheckoutScreen} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/manager-order" component={AdminOderScreen} />
            <footer className="footer spad">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    Nông sản 3 anh em
                </div>
            </footer>

        </BrowserRouter >
    );
}

export default App;
