import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { orderListWaitDelivery, updateStatusOrderShipper } from '../actions/orderAction';
import { Link } from 'react-router-dom';


export default function ShipperOrderScreen() {
    const orderList = useSelector(state => state.orderListWaitDelivery);
    const { loading, error, orders } = orderList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderListWaitDelivery());
    }, [dispatch]);

    const getOrder = async (orderID) => {
        await dispatch(updateStatusOrderShipper(orderID, 'NhanDon'));
        dispatch(orderListWaitDelivery());
    };

    return loading ? <LoadingBox></LoadingBox >
        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="list-group ">
                                <Link to="/shipper/order-new" className="list-group-item list-group-item-action btn-active">Đơn hàng mới</Link>
                                <Link to="/shipper/order-delivery" className="list-group-item list-group-item-action ">Đơn hàng đã nhận</Link>
                                <Link to="/shipper/delivery/success" className="list-group-item list-group-item-action">Đơn hàng giao thành công</Link>
                                <Link to="/shipper/delivery/fail" className="list-group-item list-group-item-action">Đơn hàng giao không thành công</Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card card-plain">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title mt-0"> Đơn hàng mới</h4>
                                    <p className="card-category d-flex flex-row" >
                                        Tổng đơn:
                            </p>

                                </div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">Mã đơn</th>
                                                    <th scope="col">Người nhận</th>
                                                    <th scope="col">Địa chỉ giao</th>
                                                    <th scope="col">Số tiền thu</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr>
                                                        <th scope="row">{order._id}</th>
                                                        <td>{order.userInfo.name}</td>
                                                        <td>{order.address}</td>
                                                        <td>{order.total}</td>
                                                        <td><button >Chi tiết</button>&nbsp;
                                                    <button onClick={() => getOrder(order._id)}>Nhận đơn</button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
}