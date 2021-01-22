import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { account } from '../actions/orderAction';
import { updateInfo } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ShipperInfoScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const updateUserInfo = useSelector(state => state.updateUserInfo);
    const { updateSuccess, loading, error } = updateUserInfo;

    const [name, setName] = useState(userInfo.name);
    const [phone, setPhone] = useState(userInfo.phone);
    const [email, setEmail] = useState(userInfo.email);
    const [address, setAddress] = useState(userInfo.address);
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();
    const onSubmitUpdate = (e) => {
        e.preventDefault();
        dispatch(updateInfo(userInfo._id, name, email, address, phone));
        setCheck(true);
    }
    useEffect(() => {
        dispatch(account('get', userInfo._id))
        if (updateSuccess && check === true) {
            alert('Cập nhật thành công')
        }
        return () => {
        };
    }, [updateUserInfo, userSignin]);
    return (
        <div style={{ paddingTop: "5em" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="list-group ">
                            <Link to="/shipper/order-new" className="list-group-item list-group-item-action">Đơn hàng mới</Link>
                            <Link to="/shipper/order-delivery" className="list-group-item list-group-item-action ">Đơn hàng đã nhận</Link>
                            <Link to="/shipper/delivery/success" className="list-group-item list-group-item-action  ">Đơn hàng giao thành công</Link>
                            <Link to="/shipper/delivery/fail" className="list-group-item list-group-item-action">Đơn hàng giao không thành công</Link>
                            <Link to="/shipper/info" className="list-group-item list-group-item-action btn-active">Thông tin cá nhân</Link>
                        </div>
                    </div>
                    {/* {loading ? <LoadingBox></LoadingBox >
                        : error ? <MessageBox variant="danger">{error}</MessageBox> : ( */}
                    <div className="col-md-9 ">
                        <div className="card">
                            <div className="card-body" style={{ margin: '30px' }}>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">Email đã được sử dụng!</MessageBox>
                                ) : ''}
                                < div className="row">
                                    <div className="col-md-12 d-flex justify-content-between">
                                        <h4 >Thông tin của tôi</h4>

                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12">
                                        <form onSubmit={onSubmitUpdate}>
                                            <div className="form-group row">
                                                <label htmlFor="username" className="col-4 col-form-label">Tên</label>
                                                <div className="col-8">
                                                    <input id="username"
                                                        name="username"
                                                        placeholder="Tên"
                                                        className="form-control here"
                                                        required="required"
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="name" className="col-4 col-form-label">Email</label>
                                                <div className="col-8">
                                                    <input id="name"
                                                        name="name"
                                                        placeholder="Email"
                                                        required="required"
                                                        className="form-control here"
                                                        type="text"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="lastname" className="col-4 col-form-label">Điện thoại</label>
                                                <div className="col-8">
                                                    <input id="phone"
                                                        name="phone"
                                                        placeholder="Điện thoại"
                                                        required="required"
                                                        className="form-control here"
                                                        type="text"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="text" className="col-4 col-form-label">Địa chỉ</label>
                                                <div className="col-8">
                                                    <input id="text"
                                                        name="text"
                                                        placeholder="Địa chỉ"
                                                        className="form-control here"
                                                        required="required"
                                                        type="text"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="offset-4 col-8">
                                                    <button name="submit" type="submit" className="btn btn-primary">Cập nhật</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}