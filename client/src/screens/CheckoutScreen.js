import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteCartPurchased, sendMailOrder } from "../actions/cartAction";
import { account, createOrder } from '../actions/orderAction';
import { formatMoney } from '../common/index';

export default function Checkout(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { availableBalance } = useSelector(state => state.account)
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [onlinePayment, setOnlinePayment] = useState(false);
    const [codPayment, setCodPayment] = useState(false);

    const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const dispatch = useDispatch();

    const handleSubmitCheckout = async (e) => {
        e.preventDefault();
        if (userInfo != null && cartItems.length > 0) {
            if (onlinePayment === true) {
                if (total + 150000 > availableBalance) {
                    alert('Tài khoản không đủ để mua hàng! Vui lòng chọn hình thức thanh toán khác');
                } else {
                    await dispatch(account('update', userInfo._id))
                    await dispatch(createOrder(userInfo._id, total, address, phone, cartItems, 'Thanh toán online', true));
                    await dispatch(sendMailOrder(userInfo, cartItems));
                    await dispatch(deleteCartPurchased());
                    props.history.push('/order-history');
                }
            }
            else {
                await dispatch(createOrder(userInfo._id, total, address, phone, cartItems, 'Thanh toán khi nhận hàng'), false);
                await dispatch(sendMailOrder(userInfo, cartItems));
                await dispatch(deleteCartPurchased());
                props.history.push('/order-history');
            }
        }
        else {
            if (window.confirm('Bạn chưa chọn mua sản phẩm nào! Bấm ok để mua hàng.')) {
                props.history.push('/')
            }
        }
    };
    useEffect(() => {
        if (userInfo != null) {
            setName(userInfo.name);
            setAddress(userInfo.address);
            setPhone(userInfo.phone);
            setEmail(userInfo.email);
        }
        return () => {
        };
    }, []);

    return <section className="checkout spad">
        <div className="container">
            <div className="checkout__form">
                <h4>Chi tiết hóa đơn</h4>
                <form onSubmit={handleSubmitCheckout}>
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="checkout__input">
                                <p>Tên người nhận<span>*</span></p>
                                <input
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="checkout__input">
                                <p>Địa chỉ<span>*</span></p>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nhập địa chỉ của bạn"
                                    className="checkout__input__add"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Điện thoại<span>*</span></p>
                                        <input
                                            type="text"
                                            value={phone}
                                            required
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input
                                            type="text"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkout__order">
                                <h4>Đơn hàng của bạn</h4>
                                <div className="checkout__order__products">Tên sản phẩm<span>Tổng</span></div>
                                <ul>
                                    {cartItems.map(product => {
                                        return <li>{product.name}<span>{formatMoney(product.price * product.qty)}</span></li>
                                    })
                                    }
                                </ul>
                                <div className="checkout__order__total">
                                    Tổng tiền hàng <span id="total">{formatMoney(total)}</span>
                                    <div className="mt-2 mb-3">Phí giao hàng <span>{formatMoney(15000)}</span></div>
                                    Tổng thanh toán <span id="total">{formatMoney(total + 15000)}</span>
                                </div>
                                <div className="mb-4">
                                    <input type="radio" name="payments" onChange={() => setOnlinePayment(true)} />
                                    <span className="ml-3">Thanh toán online</span>
                                    <br />
                                    <input type="radio" name="payments" checked onChange={() => setCodPayment(true)} />
                                    <span className="ml-3">Thanh toán khi nhận hàng</span>
                                </div>
                                <button type="submit" className="site-btn">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
}
