import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link } from 'react-router-dom';
import { formatMoney } from '../common';

function CartScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const checkoutHandler = () => {
        if (userInfo.name != null) {
            props.history.push('/checkout');
        }
        else {
            props.history.push('/signin?redirect=shipping');
        }

    }

    const changeQuantity = (operator, productId) => {
        let quantity = parseInt(document.getElementById("qty" + productId).value);
        if (operator === '-') {
            if (quantity > 1) {
                quantity -= 1;
                document.getElementById("qty" + productId).value = quantity;
                dispatch(addToCart(productId, quantity));
            }
        } else {
            quantity += 1;
            document.getElementById("qty" + productId).value = quantity;
            dispatch(addToCart(productId, quantity));
        }
    }

    useEffect(() => {
        document.title = "Giỏ hàng - NS3AE";
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    return <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.length === 0 ? <div>Giỏ hàng trống!</div> :
                                        cartItems.map(item => {
                                            return <tr key={item.product}>
                                                <td className="shoping__cart__item">
                                                    <Link to={'/product/' + item.product}>
                                                        <img src={item.image} alt={item.name} />
                                                        <h5>{item.name}</h5>
                                                    </Link>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {formatMoney(item.price)}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <span className="dec qtybtn" id='dec-qty' onClick={() => changeQuantity('-', item.product)}>-</span>
                                                            <input type="text" id={"qty" + item.product} defaultValue={item.qty} />
                                                            <span className="inc qtybtn" id="inc-qty" onClick={() => changeQuantity('+', item.product)}>+</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {formatMoney(item.price * item.qty)}
                                                </td>
                                                <td className="shoping__cart__item__close" onClick={() => removeFromCartHandler(item.product)} >
                                                    <span className="icon_close" />
                                                </td>
                                            </tr>
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <Link to="/" className="primary-btn cart-btn">Tiếp tục mua hàng</Link>
                    </div>
                </div>
                <div className="col-lg-6" />
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Tổng giỏ hàng của bạn</h5>
                        <ul>
                            <li>Tổng cộng <span>{formatMoney(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}</span></li>
                        </ul>
                        <button onClick={checkoutHandler} className="primary-btn" disabled={cartItems.length === 0}>Tiến hành đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default CartScreen;