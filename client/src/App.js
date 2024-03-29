
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
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
import ShipperDeliverySuccess from './screens/ShipperDeliverySuccess';
import ShipperDeliveryFail from './screens/ShipperDeliveryFail';
import ShipperInfo from './screens/ShipperInfoScreen';
import ManageBrandScreen from './screens/ManageBrandScreen';
import AddBrandScreen from './screens/AddBrandScreen';
import UpdateBrandScreen from './screens/UpdateBrandScreen';
function App() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const LogOut = () => {
        setHover(false);
        dispatch(userLogOut());
    }
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    return (
        <BrowserRouter>
            <div className="main-container">
                <header className="header">
                    <div className="header__top col-lg-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><i className="fa fa-envelope" /> NS3AE@gmail.com</li>
                                            {/* <li>Free ship cho đơn trên 500k</li> */}
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
                                                        <span className="user-hover-info ml-4" onMouseMove={() => setHover(true)} >
                                                            <Link style={{ "color": "red" }} >{userInfo.name}</Link>
                                                        </span>
                                                        {hover ?
                                                            <div className="user-info" onMouseLeave={() => setHover(false)}>
                                                                {userInfo.role === 'user' ?
                                                                    <div>
                                                                        <Link to="/userInfo" className="link link-item pr-4 pl-4 pb-2 pt-2">Thông tin của bạn</Link>
                                                                        <Link to="/order-history" className="link link-item pr-4 pl-4 pb-2">Lịch sử mua hàng</Link>
                                                                        <Link to='/' onClick={LogOut} className="text-left link-item pl-4 pb-2 link">Đăng xuất</Link></div>
                                                                    : <div>
                                                                        <Link to='/' onClick={LogOut} className="link link-item pr-4 pl-4 pb-2" style={{ padding: "5px" }}>Đăng xuất</Link>
                                                                    </div>
                                                                }
                                                            </div>
                                                            : ''}
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
                <Switch>
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
                    <AdminRoute path="/admin/manage-brand" component={ManageBrandScreen} />
                    <AdminRoute path="/admin/add-brand" component={AddBrandScreen} />
                    <AdminRoute path="/admin/brand/:id" component={UpdateBrandScreen} />
                    <AdminRoute path="/admin/add-category" component={AddCategoryScreen} />
                    <AdminRoute path="/admin/category/:id" component={UpdateCategoryScreen} />

                    <PrivateRoute path="/order-history" component={OrderHistoryScreen} />
                    <PrivateRoute path="/checkout" component={CheckoutScreen} />
                    <PrivateRoute path="/order-detail/:id" component={orderDetailScreen} />
                    <PrivateRoute path="/userInfo" component={UserInfo} />

                    <ShipperRoute path="/shipper/order-new" component={ShipperOrderScreen} />
                    <ShipperRoute path="/shipper/order-delivery" component={ShipperDeliveryScreen} />
                    <ShipperRoute path="/shipper/delivery/success" component={ShipperDeliverySuccess} />
                    <ShipperRoute path="/shipper/delivery/fail" component={ShipperDeliveryFail} />
                    <ShipperRoute path="/shipper/info" component={ShipperInfo} />

                    <Redirect to="/" ></Redirect>
                </Switch>

            </div>
            <footer className="footer spad">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    @Nông sản 3 anh em
                    </div>
            </footer>
        </BrowserRouter >
    );
}

export default App;
