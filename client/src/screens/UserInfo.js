import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { account } from '../actions/orderAction';
import { formatMoney } from '../common/index';
export default function UserInfo(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const { availableBalance } = useSelector(state => state.account);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(account('get', userInfo._id))
        return () => {
        };
    }, []);
    return <div className="container">
        <div className="row">
            <div className="col-md-3 ">
                <div className="list-group ">
                    <Link to='/userInfo' className="list-group-item list-group-item-action btn-active">Thông tin của tôi</Link>
                    <Link to='/order-history' className="list-group-item list-group-item-action">Lịch sử đặt hàng</Link>
                </div>
            </div>
            {/* thông tin user */}
            <div className="col-md-9 info">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-between">
                                <h4 >Thông tin của tôi</h4>
                                <label htmlFor="text" className="col-4 col-form-label">Số dư tài khoản: {formatMoney(parseFloat(availableBalance))}</label>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="username" className="col-4 col-form-label">Tên</label>
                                        <div className="col-8">
                                            <input id="username" name="username" placeholder="Tên" className="form-control here" required="required" type="text" value={userInfo.name} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-4 col-form-label">Email</label>
                                        <div className="col-8">
                                            <input id="name" name="name" placeholder="Email" className="form-control here" type="text" value={userInfo.email} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="lastname" className="col-4 col-form-label">Điện thoại</label>
                                        <div className="col-8">
                                            <input id="lastname" name="lastname" placeholder="Điện thoại" className="form-control here" type="text" value={userInfo.phone} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="text" className="col-4 col-form-label">Địa chỉ</label>
                                        <div className="col-8">
                                            <input id="text" name="text" placeholder="Địa chỉ" className="form-control here" required="required" type="text" value={userInfo.address} />
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
    </div >

}
