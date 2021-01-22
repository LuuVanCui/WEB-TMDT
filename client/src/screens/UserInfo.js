import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { account } from '../actions/orderAction';
import { updateInfo } from '../actions/userActions';
import { formatMoney } from '../common/index';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Header from '../components/Header';
import Search from '../components/SearchSreen';
export default function UserInfo(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const updateUserInfo = useSelector(state => state.updateUserInfo);
    const { updateSuccess, loading, error } = updateUserInfo;
    const { availableBalance } = useSelector(state => state.account);
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
    }, [updateUserInfo]);
    return <> <Header />
        <Search />
        <div className="container">
            <div className="row">
                <div className="col-md-2 ">
                    <div className="list-group ">
                        <Link to='/userInfo' className="list-group-item list-group-item-action btn-active">Thông tin của tôi</Link>
                        <Link to='/order-history' className="list-group-item list-group-item-action">Lịch sử đặt hàng</Link>
                    </div>
                </div>
                {/* thông tin user */}
                <div className="col-md-10 info">
                    <div className="card">
                        <div className="card-body m-4">
                            {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">Email đã được sử dụng!</MessageBox>
                            ) : ''}
                            < div className="row">
                                <div className="col-md-12 d-flex justify-content-between">
                                    <h4 >Thông tin của tôi</h4>
                                    <label htmlFor="text" className="col-4 col-form-label">Số dư tài khoản: {formatMoney(parseFloat(availableBalance))}</label>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={onSubmitUpdate}>
                                        <div className="form-group row">
                                            <label htmlFor="username" className="col-3 col-form-label">Tên</label>
                                            <div className="col-9">
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
                                            <label htmlFor="name" className="col-3 col-form-label">Email</label>
                                            <div className="col-9">
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
                                            <label htmlFor="lastname" className="col-3 col-form-label">Điện thoại</label>
                                            <div className="col-9">
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
                                            <label htmlFor="text" className="col-3 col-form-label">Địa chỉ</label>
                                            <div className="col-9">
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
                                                <button name="submit" type="submit" className="btn btn-active">Cập nhật</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    </>
}
