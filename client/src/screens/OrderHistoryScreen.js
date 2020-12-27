import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderOfUser } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function OrderHistoryScreen() {
    const orderMineList = useSelector(state => state.orderMineList);

    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderOfUser());
    }, [dispatch]);

    return <div class="wrapper ">
        <div class="main-panel">
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-plain">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title mt-0"> Đơn hàng của bạn</h4>
                                    <p class="card-category"> </p>
                                </div>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">{error}</MessageBox>
                                ) : (
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover">
                                                        <thead class="">
                                                            <th>
                                                                ID
                                                </th>
                                                            <th>
                                                                Ngày đặt
                                                </th>
                                                            <th>
                                                                Địa chỉ
                                                </th>
                                                            <th>
                                                                Tổng thanh toán
                                                </th>
                                                            <th>
                                                                Thanh toán
                                                </th>
                                                            <th>
                                                                Giao hàng
                                                </th>
                                                            <th>
                                                                Action
                                                </th>
                                                        </thead>
                                                        <tbody>
                                                            {orders.map((order) => (
                                                                <tr key={order._id}>
                                                                    <td>
                                                                        {order._id}
                                                                    </td>
                                                                    <td>
                                                                        {order.createdAt.substring(0, 10)}
                                                                    </td>
                                                                    <td>
                                                                        {order.address}
                                                                    </td>
                                                                    <td>
                                                                        {formatMoney(parseFloat(order.total))}
                                                                    </td>
                                                                    <td>
                                                                        {order.isPaid ? ("Đã thanh toán") : "Chưa thanh toán"}
                                                                    </td>
                                                                    <td>
                                                                        {order.deliveryStatus}
                                                                    </td>
                                                                    <td>
                                                                        <button>Chi tiết</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}
export default OrderHistoryScreen;