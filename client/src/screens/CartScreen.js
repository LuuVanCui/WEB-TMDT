import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link } from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    const changeQuantity = (operator, qty) => {
        if (operator === '-') {
            if (document.getElementById("qty").value > 1) {
                document.getElementById("qty").value = parseInt(document.getElementById("qty").value) - 1;
            }
        } else {
            document.getElementById("qty").value = parseInt(document.getElementById("qty").value) + 1;
        }
    }

    useEffect(() => {
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
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.length === 0 ? <div>Cart is empty!</div> :
                                        cartItems.map(item => {
                                            return <tr>
                                                <td className="shoping__cart__item">
                                                    <Link to={'/product/' + item.product}>
                                                        <img src={item.image} alt={item.name} />
                                                        <h5>{item.name}</h5>
                                                    </Link>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {item.price} VNĐ
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <span class="dec qtybtn" id='dec-qty' onClick={() => changeQuantity('-', item.product)}>-</span>
                                                            <input type="text" id={"qty" + item.product} value={item.qty} />
                                                            <span class="inc qtybtn" id="inc-qty" onClick={() => changeQuantity('+', item.product)}>+</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {item.price * item.qty} VNĐ
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
                        <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
            Upadate Cart</a>
                    </div>
                </div>
                <div className="col-lg-6" />
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Total <span>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)} VNĐ</span></li>
                        </ul>
                        <button onClick={checkoutHandler} className="primary-btn" disabled={cartItems.length === 0}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default CartScreen;