import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderOfUser, orderDetail } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/SearchSreen';
function OrderHistoryScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const orderMineList = useSelector(state => state.orderMineList);
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    // const userInfo = Cookie.get('userInfo');
    useEffect(() => {
        if (!userInfo) {
            props.history.push(redirect);
        }
        else {
            dispatch(listOrderOfUser());
        }
    }, []);

    return <>
        <Header />
        <Search />
        <div className="container mb-4">
            <div className="row">
                <div className="col-md-2 ">
                    <div className="list-group ">
                        <Link to='/userInfo' className="list-group-item list-group-item-action">Thông tin của tôi</Link>
                        <Link to='/order-history' className="list-group-item list-group-item-action btn-active">Lịch sử đặt hàng</Link>
                    </div>
                </div>

                {
                    loading ? <LoadingBox></LoadingBox >
                        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
                            <div class="col-md-10">
                                <div class="card card-plain">
                                    <div class="card-header card-header-primary">
                                        <h4 class="card-title mt-0"> Đơn hàng của bạn</h4>
                                        <p class="card-category"> </p>
                                    </div>
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
                                                                {formatMoney(parseFloat(order.total + order.shipPrice))}
                                                            </td>
                                                            <td>
                                                                {order.isPaid === true ? ("Đã thanh toán") : "Chưa thanh toán"}
                                                            </td>
                                                            <td>
                                                                {order.deliveryStatus}
                                                            </td>
                                                            <td>
                                                                <Link to={"/order-detail/" + order._id}>Chi tiết</Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    </>
}
export default OrderHistoryScreen;