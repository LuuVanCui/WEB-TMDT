import { useState } from "react"

export default function Checkout(props) {

    const [name, setName] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return <section className="checkout spad">
        <div className="container">
            <div className="checkout__form">
                <h4>Billing Details</h4>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="checkout__input">
                                <p>Tên người nhận<span>*</span></p>
                                <input
                                    type="text"
                                    value={name}
                                />
                            </div>
                            <div className="checkout__input">
                                <p>Địa chỉ<span>*</span></p>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    className="checkout__input__add"
                                    value={address}
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Điện thoại<span>*</span></p>
                                        <input
                                            type="text"
                                            value={phone}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input
                                            type="text"
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="checkout__input__checkbox">
                                <label htmlFor="acc">
                                    Tạo tài khoản?
                                    <input type="checkbox" id="acc" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                            <p>Tạo tài khoản mới bằng cách nhập thông tin bên dưới</p>
                            <div className="checkout__input">
                                <p>Mật khẩu tài khoản<span>*</span></p>
                                <input type="text" />
                            </div> */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="checkout__order">
                                <h4>Đơn hàng của bạn</h4>
                                <div className="checkout__order__products">Tên sản phẩm<span>Tổng</span></div>
                                <ul>
                                    <li>Vegetable’s Package <span>$75.99</span></li>
                                    <li>Fresh Vegetable <span>$151.99</span></li>
                                    <li>Organic Bananas <span>$53.99</span></li>
                                </ul>
                                <div className="checkout__order__total">Total <span>$750.99</span></div>
                                <button type="submit" className="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

}