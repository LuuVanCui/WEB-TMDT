import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderOfUser, orderDetail } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { orderDelivery, updateStatusOrderShipper } from '../actions/orderAction';
import { Link } from 'react-router-dom';

export default function ShipperDeliverySuccess() {
    const orderList = useSelector(state => state.orderListWaitDelivery);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderDelivery());
    }, [dispatch]);

    return loading ? <LoadingBox></LoadingBox >
        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="list-group ">
                                <Link className="list-group-item list-group-item-action">Đơn hàng mới</Link>
                                <Link className="list-group-item list-group-item-action btn-active">Đơn hàng đã nhận</Link>
                                <Link className="list-group-item list-group-item-action">Đơn hàng giao thành công</Link>
                                <Link className="list-group-item list-group-item-action">Đơn hàng giao không thành công</Link>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card card-plain">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title mt-0"> Đơn hàng giao thành công</h4>
                                    <p class="card-category">
                                    </p>
                                </div>

                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
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
                                                        <td>
                                                            <Link>Chi tiết</Link>
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
            </div>
        )
}