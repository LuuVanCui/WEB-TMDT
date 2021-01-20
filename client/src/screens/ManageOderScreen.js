import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { adminApproveOrder, listOrderWaiting } from '../actions/orderAction';
import { formatMoney } from '../common';
import AdminSideBar from "../components/AdminSideBar";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function ManageOderScreen() {

    const orderList = useSelector(state => state.listOrderForAdmin);
    console.log(orderList);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Quản lý đơn hàng - NS3AE';
        dispatch(listOrderWaiting());
    }, [dispatch]);

    const approveOrder = (orderID) => {
        if (window.confirm('Xác nhận duyệt đơn hàng' + orderID + "?")) {
            dispatch(adminApproveOrder(orderID, 'Duyet'));
            alert('Đã duyệt');
            dispatch(listOrderWaiting());
        }
    }
    const cancelOrder = (orderID) => {
        if (window.confirm('Xác nhận hủy đơn hàng ' + orderID + "?")) {
            dispatch(adminApproveOrder(orderID, 'Huy'));
            alert('Đã hủy');
            dispatch(listOrderWaiting());
        }
    }

    return <div className="container-fluid mt-4 mb-4">
        <div className="row">
            <div className="col-lg-2">
                <AdminSideBar pageName='order' />
            </div>
            <div className="wrapper col-lg-10">
                <div className="main-panel">
                    <div className="content">
                        <div>
                            {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                                        <div>
                                            <div>
                                                <div className="card card-plain">
                                                    <div className="card-header card-header-primary d-flex">
                                                        <h4 className="card-title mt-0"> Quản lí đơn hàng</h4>
                                                        <h5 className="text-right font-weight-bold ml-auto mt-2">Tổng số đơn hàng: {orders.length}</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="product-nav-control">
                                                            <ul className="d-flex">
                                                                <li className="active-order">Đơn chưa duyệt</li>
                                                                <li>Đơn đã duyệt</li>
                                                                <li>Tất cả đơn hàng</li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table table-hover">
                                                                <thead className>
                                                                    <tr><th>
                                                                        ID
                                                                        </th>
                                                                        <th>
                                                                            Người nhận
                                                                        </th>
                                                                        <th>
                                                                            Địa chỉ
                                                                        </th>
                                                                        <th>
                                                                            Tổng thanh toán
                                                                        </th>
                                                                        <th>
                                                                            Tình trạng
                                                                        </th>
                                                                        <th>
                                                                            Thao tác
                                                                        </th>
                                                                    </tr></thead>
                                                                <tbody>
                                                                    {orders.map((order) => (
                                                                        <tr>
                                                                            <td>
                                                                                {order._id}
                                                                            </td>
                                                                            <td>
                                                                                {order.name}
                                                                            </td>
                                                                            <td>{order.address}

                                                                            </td>
                                                                            <td>
                                                                                {formatMoney(parseFloat(order.total))}
                                                                            </td>
                                                                            <td>
                                                                                {order.isPaid ? ("Đã thanh toán") : "Chưa thanh toán"}
                                                                            </td>
                                                                            <td>
                                                                                <button onClick={() => approveOrder(order._id)}>Duyệt</button> &nbsp;
                                                                        <button onClick={() => cancelOrder(order._id)}>Hủy</button>
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
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}