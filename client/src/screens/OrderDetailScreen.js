import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDetail } from "../actions/orderAction";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { OrderDetailReducer } from "../reducers/orderReducers";
export default function OrderDetailScreen(props) {
    const orderID = props.match.params.id;
    const Order = useSelector(state => state.orderDetail);
    const { loading, error, order } = Order;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderDetail(orderID));
    }, []);

    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <div>
                <div className="card-body">
                    <div className="row justify-content-between mb-3">
                        <div className="col-auto">
                            <h6 className="color-1 mb-0 change-color">Chi tiết hóa đơn</h6>
                        </div>
                    </div>
                    {order.billDetail.map(item => (
                        <div className="row mt-4">
                            <div className="col">
                                <div className="card card-2">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="sq align-self-center "> <img className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={item.image} width={135} height={135} /> </div>
                                            <div className="media-body my-auto text-right">
                                                <div className="row my-auto flex-column flex-md-row">
                                                    <div className="col-auto my-auto ">
                                                        <h6 className="mb-0"> {item.name}</h6>
                                                    </div>
                                                    <div className="col my-auto "> <small>Số lượng: {item.qty} </small></div>
                                                    <div className="col my-auto "> <small>Weight : </small></div>
                                                    <div className="col my-auto "> <small> : </small></div>
                                                    <div className="col my-auto ">
                                                        <h6 className="mb-0">{order.total}</h6>
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
                                    <p className="mb-1 text-dark"><b>Order Details</b></p>
                                </div>
                            </div>

                            <div className="row justify-content-between">
                                <div className="flex-sm-col text-right col">
                                    <p className="mb-1"><b>Toatal: {order.total}</b></p>
                                </div>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1">Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row invoice ">
                        <div className="col">
                            <p className="mb-1"> Invoice Number : 788152</p>
                            <p className="mb-1">Invoice Date : 22 Dec,2019</p>
                            <p className="mb-1">Recepits Voucher:18KU-62IIK</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>

}