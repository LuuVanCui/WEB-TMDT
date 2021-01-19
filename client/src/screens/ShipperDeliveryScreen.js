import { formatMoney } from '../common';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderOfUser, orderDetail } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { orderDelivery, updateStatusOrderShipper } from '../actions/orderAction';

export default function ShipperDeliveryScreen() {
    const orderList = useSelector(state => state.orderListWaitDelivery);
    const { loading, error, orders } = orderList;
    const dispatch = useDispatch();
    const cancelOrder = async (orderID) => {
        await dispatch(updateStatusOrderShipper(orderID, 'Huy'));
        dispatch(orderDelivery());
    };
    const successOrder = async (orderID) => {
        await dispatch(updateStatusOrderShipper(orderID, 'DaGiao'));
        dispatch(orderDelivery());
    };
    useEffect(() => {
        dispatch(orderDelivery());
    }, [dispatch]);

    return loading ? <LoadingBox></LoadingBox >
        : error ? <MessageBox variant="danger">{error}</MessageBox> : (
            <div>
                <table className="table">
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
                                <td><button onClick={() => successOrder(order._id)}>Giao xong</button>&nbsp;
                                    <button onClick={() => cancelOrder(order._id)}>Hủy đơn</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
}