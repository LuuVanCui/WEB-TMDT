import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderOfUser, orderDetail } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { orderDeliveryFail } from '../actions/orderAction';
import { Link } from 'react-router-dom';

export default function ShipperDeliveryFail() {
    const orderList = useSelector(state => state.orderListWaitDelivery);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderDeliveryFail());
    }, [dispatch]);

    return (
        <div style={{ paddingTop: "5em" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="list-group ">
                            <Link to="/shipper/order-new" className="list-group-item list-group-item-action">Đơn hàng mới</Link>
                            <Link to="/shipper/order-delivery" className="list-group-item list-group-item-action ">Đơn hàng đã nhận</Link>
                            <Link to="/shipper/delivery/success" className="list-group-item list-group-item-action  ">Đơn hàng giao thành công</Link>
                            <Link to="/shipper/delivery/fail" className="list-group-item list-group-item-action btn-active">Đơn hàng giao không thành công</Link>
                            <Link to="/shipper/info" className="list-group-item list-group-item-action">Thông tin cá nhân</Link>
                        </div>
                    </div>
                    {loading ? <LoadingBox></LoadingBox >
                        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
                            <div className="col-md-9">
                                <div className="card card-plain">
                                    <div className="card-header card-header-primary" style={{ marginBottom: '8px' }}>
                                        <h4 className="card-title mt-0"> Đơn hàng giao không thành công
                                        <p className="card-category" >
                                                Tổng: {orders.length}  đơn
                                            </p>
                                        </h4>

                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className="thead" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                                                    <tr>
                                                        <th scope="col" style={{ width: '10%' }}>Mã đơn</th>
                                                        <th scope="col">Người nhận</th>
                                                        <th scope="col">Địa chỉ giao</th>
                                                        <th scope="col">Số tiền thu</th>
                                                        <th>Thời gian</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders.map((order) => (
                                                        <tr>
                                                            <th scope="row">{order._id}</th>
                                                            <td>{order.userInfo.name}</td>
                                                            <td>{order.address}</td>
                                                            <td> {formatMoney(parseFloat(order.total))}</td>
                                                            <td>{order.updateAt}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}