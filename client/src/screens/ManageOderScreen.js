import React, { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { adminApproveOrder, getOrderByDeliveryStatus } from '../actions/orderAction';
import { formatMoney } from '../common';
import AdminSideBar from "../components/AdminSideBar";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function ManageOderScreen() {

    const [status, setStatus] = useState('Đang chờ xử lý');
    const orderList = useSelector(state => state.orderByStatusList);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Quản lý đơn hàng - NS3AE';
        dispatch(getOrderByDeliveryStatus('Đang chờ xử lý'));
    }, []);

    const approveOrder = async (orderID) => {
        if (window.confirm('Xác nhận duyệt đơn hàng' + orderID + "?")) {
            await dispatch(adminApproveOrder(orderID, 'Duyet'));
            alert('Đã duyệt');
            await dispatch(getOrderByDeliveryStatus('Đang chờ xử lý'));
        }
    }
    const cancelOrder = async (orderID) => {
        if (window.confirm('Xác nhận hủy đơn hàng ' + orderID + "?")) {
            await dispatch(adminApproveOrder(orderID, 'Huy'));
            alert('Đã hủy');
            await dispatch(getOrderByDeliveryStatus('Đang chờ xử lý'));
        }
    }

    const onGetOrderByStatus = (status) => {
        dispatch(getOrderByDeliveryStatus(status));
        setStatus(status);
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
                                                            <ul className="list-group list-group-horizontal">
                                                                <li className={status === 'Đang chờ xử lý' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Đang chờ xử lý')}>Chờ xử lý</li>
                                                                <li className={status === 'Chờ vận chuyển' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Chờ vận chuyển')}>Chờ vận chuyển</li>
                                                                <li className={status === 'Đang giao hàng' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Đang giao hàng')}>Đang giao</li>
                                                                <li className={status === 'Đã giao thành công' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Đã giao thành công')}>Đã giao</li>
                                                                <li className={status === 'Đã hủy' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Đã hủy')}>Đơn hủy</li>
                                                                <li className={status === 'Giao hàng không thành công' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Giao hàng không thành công')}>Giao lỗi</li>
                                                                <li className={status === 'Tất cả' ? "active-order-status list-group-item col text-center" : "list-group-item col text-center"} onClick={() => onGetOrderByStatus('Tất cả')}>Tất cả</li>
                                                            </ul>
                                                        </div>
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-striped table-bordered">
                                                                <thead className>
                                                                    <tr><th>
                                                                        ID
                                                                        </th>
                                                                        <th>
                                                                            Tên người nhận
                                                                        </th>
                                                                        <th>
                                                                            Email
                                                                        </th>
                                                                        <th>
                                                                            Địa chỉ
                                                                        </th>
                                                                        <th>
                                                                            Tổng hóa đơn
                                                                        </th>
                                                                        <th>
                                                                            Thanh toán
                                                                        </th>
                                                                        <th>
                                                                            Trạng thái
                                                                        </th>
                                                                        {status === 'Đang chờ xử lý' && <th>
                                                                            Thao tác
                                                                        </th>}
                                                                    </tr></thead>
                                                                <tbody>
                                                                    {orders.map((order) => (
                                                                        <tr>
                                                                            <td>
                                                                                {order._id}
                                                                            </td>
                                                                            <td>
                                                                                {order.user_id.name}
                                                                            </td>
                                                                            <td>
                                                                                {order.user_id.email}
                                                                            </td>
                                                                            <td>{order.address}

                                                                            </td>
                                                                            <td>
                                                                                {formatMoney(parseFloat(order.total))}
                                                                            </td>
                                                                            <td>
                                                                                {order.isPaid === true ? ("Đã thanh toán") : "Chưa thanh toán"}
                                                                            </td>
                                                                            <td>{order.deliveryStatus}</td>
                                                                            {status === 'Đang chờ xử lý' && <td>
                                                                                <button onClick={() => approveOrder(order._id)}>Duyệt</button> &nbsp;
                                                                                <button onClick={() => cancelOrder(order._id)}>Hủy</button>
                                                                            </td>}
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
    </div >
}