
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import AddProductScrean from './screens/AddProductScreen';
import { useDispatch, useSelector } from 'react-redux';
import ManageUserScreen from './screens/ManageUserScreen';
import UpdateProduct from './screens/UpdateProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ManageOderScreen from './screens/ManageOderScreen';
import { useEffect } from 'react';
import { userLogOut } from './actions/userActions';
import FogotPasswordScreen from './screens/FogotPasswordScreen';
import EnterCodeResetPasswordScreen from './screens/EnterCodeResetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import orderDetailScreen from './screens/OrderDetailScreen';
import ShipperOrderScreen from './screens/ShipperOderScreen';
import UserInfo from './screens/UserInfo';
import ShipperDeliveryScreen from './screens/ShipperDeliveryScreen';
import AdminRoute from './components/AdminRoute';
import ShipperRoute from './components/ShipperRoute';
import PrivateRoute from './components/PrivateRoute';
import { listProducts } from './actions/productActions';
import ManageCategoryScreen from './screens/ManageCategoryScreen';
import AddCategoryScreen from './screens/AddCategoryScreen';
import ManageProductScreen from './screens/ManageProductScreen';
import UpdateCategoryScreen from './screens/UpdateCategoryScreen';

function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const LogOut = () => {
        dispatch(userLogOut());
    }
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="main-container">
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
                                                        <Link to="/userInfo" style={{ "color": "red" }}>{userInfo.name}</Link>
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
                </header>
                <Route path="/" exact={true} component={HomeScreen} />
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/fogot_password" component={FogotPasswordScreen} />
                <Route path="/enter_code" component={EnterCodeResetPasswordScreen} />
                <Route path="/reset_password" component={ResetPasswordScreen} />
                <Route path="/confirm-email" component={ConfirmEmailScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <Route path="/product/:id" component={ProductScreen} />

                <AdminRoute path="/admin/add-product" component={AddProductScrean} />
                <AdminRoute path="/admin/manage-product" component={ManageProductScreen} />
                <AdminRoute path="/admin/manage-user" component={ManageUserScreen} exact />
                <AdminRoute path="/admin/updateProduct/:id" component={UpdateProduct} />
                <AdminRoute path="/admin/manage-order" component={ManageOderScreen} />
                <AdminRoute path="/admin/manage-category" component={ManageCategoryScreen} />
                <AdminRoute path="/admin/add-category" component={AddCategoryScreen} />
                <AdminRoute path="/admin/category/:id" component={UpdateCategoryScreen} />

                <PrivateRoute path="/order-history" component={OrderHistoryScreen} />
                <PrivateRoute path="/checkout" component={CheckoutScreen} />
                <PrivateRoute path="/order-detail/:id" component={orderDetailScreen} />
                <PrivateRoute path="/userInfo" component={UserInfo} />

                <ShipperRoute path="/shipper" component={ShipperOrderScreen} />
                <ShipperRoute path="/shipper-delivery" component={ShipperDeliveryScreen} />

                <footer className="footer spad">
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        @Nông sản 3 anh em
                    </div>
                </footer>
            </div>
        </BrowserRouter >
    );
}

export default App;
