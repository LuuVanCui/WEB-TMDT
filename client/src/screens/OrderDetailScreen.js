import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { orderDetail } from "../actions/orderAction";
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
    useEffect(() => {
        dispatch(orderDetail(orderID));
    }, []);

    return <>
        <Header />
        <Search />

        <div className="container">
            <div className="row">
                <div className="col-md-3 ">
                    <div className="list-group ">
                        <Link to='/userInfo' className="list-group-item list-group-item-action">Thông tin của tôi</Link>
                        <Link to='/order-history' className="list-group-item list-group-item-action btn-active">Lịch sử đặt hàng</Link>
                    </div>
                </div>
                {loading ? <LoadingBox></LoadingBox> :
                    error ? <MessageBox variant="danger">{error}</MessageBox> :
                        <div className="card-body ml-3 border">
                            <Link to='/order-history' className="btn">Quay lại</Link>

                            <div className="row justify-content-between mb-3">
                                <div className="col-auto">
                                    <h6 className="color-1 mb-0 change-color">Chi tiết hóa đơn <span style={{ color: "blue" }}> #{order._id} </span></h6>
                                </div>
                            </div>
                            {order.billDetail.map(item => (
                                <div className="row mt-4">
                                    <div className="col">
                                        <div className="card card-2">
                                            <div className="card-body">
                                                <div className="media">
                                                    <div className="sq align-self-center "> <img className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={item.image} width={90} height={90} /> </div>
                                                    <div className="media-body my-auto text-right">
                                                        <div className="row my-auto flex-column flex-md-row">
                                                            <div className="col-auto my-auto ">
                                                                <h6 className="mb-0"> {item.name}</h6>
                                                            </div>

                                                            <div className="col my-auto "> <small>Khối lượng : {item.product.weight} x {item.qty} =  {item.product.weight * item.qty} kg</small></div>
                                                            <div style={{ visibility: 'hidden' }}>

                                                                {weight += item.product.weight * item.qty}</div>

                                                            <div className="col my-auto ">
                                                                <h6 className="mb-0">Giá: {item.price} x {item.qty} = {formatMoney(parseFloat(item.price * item.qty))}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="row mt-4">
                                <div className="col">
                                    <div className="row justify-content-between">
                                        <div className="col-auto">
                                            <p className="mb-1 text-dark"><b>Chi tiết đơn hàng</b></p>
                                        </div>
                                    </div>
                                    <div className="row invoice ">
                                        <div className="col">
                                            <p className="mb-1"> Địa chỉ: {order.address}</p>
                                            <p className="mb-1">Ngày đặt:  {order.createdAt}</p>
                                            <p className="mb-1">Điện thoại: {order.phone}</p>
                                            <p className="mb-1">Hình thức thanh toán: {order.payment}</p>
                                        </div>
                                        <div className="row justify-content-between">
                                            <div className="flex-sm-col text-right col">
                                                <p className="mb-1">Tiền hàng:  {formatMoney(parseFloat(order.total))} </p>
                                                <p className="mb-1">Khối lượng: {weight} kg</p>
                                                <p className="mb-1">Phí ship: {formatMoney(parseFloat(order.shipPrice))}</p>
                                                <p className="mb-1"><b>Tổng cộng: {formatMoney(parseFloat(order.total + order.shipPrice))}</b></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                }
            </div>
            <div className="card-footer">

            </div>
        </div>
    </>
}