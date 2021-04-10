import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { orderDetail, adminApproveOrder } from "../actions/orderAction";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { OrderDetailReducer } from "../reducers/orderReducers";
import { formatMoney } from '../common';
import Header from "../components/Header";
import Search from "../components/SearchSreen";

export default function OrderDetailScreen(props) {
    const orderID = props.match.params.id;
    const Order = useSelector(state => state.orderDetail);
    const { loading, error, order } = Order;
    var weight = 0;
    const dispatch = useDispatch();
    const HuyDon = async (id) => {
        if (window.confirm('Xác nhận hủy đơn hàng #' + id + "?")) {
            await dispatch(adminApproveOrder(id, 'Huy'));
            alert("Đã hủy đơn!")
            dispatch(orderDetail(id));
        }
    }

    useEffect(() => {
        dispatch(orderDetail(orderID));
    }, []);

    return <>
        <Header />
        <Search />

        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group ">
                        <Link to='/userInfo' className="list-group-item list-group-item-action">Thông tin của tôi</Link>
                        <Link to='/order-history' className="list-group-item list-group-item-action btn-active">Lịch sử đặt hàng</Link>
                    </div>
                </div>

                {loading ? <LoadingBox></LoadingBox> :
                    error ? <MessageBox variant="danger">{error}</MessageBox> :
                        <div className="col-md-10 border">
                            <div className="header-option">
                                <Link to='/order-history' className="text-muted ml-3"><i className="fa fa-arrow-left"></i><span className="ml-2">Quay lại</span></Link>
                                <h6 className="bill-title">Chi tiết hóa đơn <span style={{ color: "blue" }}> #{order._id} </span></h6>
                                <span>
                                    {order.deliveryStatus === 'Đang chờ xử lý' ?
                                        <button className="ml-auto mr-3" onClick={() => HuyDon(order._id)} ><i class="fa fa-window-close"></i> Hủy đơn</button>
                                        : <div></div>}
                                </span>
                            </div>

                            {order.billDetail.map(item => (
                                <div className="row border d-flex align-items-center m-3">
                                    <div className="col-4">
                                        <img className="product-img-bill" src={item.image} />
                                    </div>
                                    <h6 className="col-4">
                                        <span className="product-cart-name">
                                            {item.name}
                                        </span>
                                    </h6>
                                    <div className="col-4">
                                        <h6 className="">Khối lượng : {item.product.weight} x {item.qty} =  {item.product.weight * item.qty} kg</h6>
                                        <div style={{ visibility: 'hidden' }}>
                                            {weight += item.product.weight * item.qty}</div>
                                        <h6 className="">Giá: {item.price} x {item.qty} = {formatMoney(parseFloat(item.price * item.qty))}</h6>
                                    </div>
                                </div>

                            ))}
                            <div className="mt-4">
                                <div className="col">
                                    <div className="row invoice mr-2 ml-2">
                                        <div className="col">
                                            <p className="mb-1"> Địa chỉ: {order.address}</p>
                                            <p className="mb-1">Ngày đặt:  {order.createdAt}</p>
                                            <p className="mb-1">Điện thoại: {order.phone}</p>
                                            <p className="mb-1">Hình thức thanh toán: {order.payment}</p>
                                        </div>
                                        <div className="col">
                                            <p className="mb-1">Tiền hàng:  {formatMoney(parseFloat(order.total))} </p>
                                            <p className="mb-1">Khối lượng: {weight} kg</p>
                                            <p className="mb-1">Phí ship: {formatMoney(parseFloat(order.shipPrice))}</p>
                                            <p className="mb-1"><b>Tổng cộng: {formatMoney(parseFloat(order.total + order.shipPrice))}</b></p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                }
            </div>
        </div>
    </>
}