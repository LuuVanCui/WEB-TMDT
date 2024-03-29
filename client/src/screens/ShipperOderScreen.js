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
        if (window.confirm('Nhận đơn hàng #' + orderID + "?")) {
            await dispatch(updateStatusOrderShipper(orderID, 'NhanDon'));
            alert("Nhận đơn thành công!")
            dispatch(orderListWaitDelivery());
        }
    };

    return (
        <div style={{ paddingTop: "5em" }} >
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="list-group ">
                            <Link to="/shipper/order-new" className="list-group-item list-group-item-action btn-active">Đơn hàng mới</Link>
                            <Link to="/shipper/order-delivery" className="list-group-item list-group-item-action ">Đơn hàng đã nhận</Link>
                            <Link to="/shipper/delivery/success" className="list-group-item list-group-item-action">Đơn hàng giao thành công</Link>
                            <Link to="/shipper/delivery/fail" className="list-group-item list-group-item-action">Đơn hàng giao không thành công</Link>
                            <Link to="/shipper/info" className="list-group-item list-group-item-action">Thông tin cá nhân</Link>
                        </div>
                    </div>
                    {loading ? <LoadingBox></LoadingBox >
                        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
                            <div className="col-md-9">
                                <div className="card card-plain">
                                    <div className="card-header card-header-primary" style={{ marginBottom: '8px' }}>
                                        <h4 className="card-title mt-0"> Đơn hàng mới</h4>
                                        <p className="card-category d-flex flex-row" >
                                            Tổng: {orders.length}  đơn
                                        </p>

                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className="thead" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
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
                                                            <td> {order.isPaid === true ? 0 : formatMoney(parseFloat(order.total))}</td>
                                                            <td>
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
                        )}
                </div>
            </div>
        </div >
    )
}