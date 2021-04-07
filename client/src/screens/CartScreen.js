import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link } from 'react-router-dom';
import { formatMoney } from '../common';
import Header from '../components/Header';
import Search from '../components/SearchSreen';

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
        if (userInfo != null) {
            props.history.push('/checkout');
        }
        else {
            props.history.push('/signin?redirect=checkout');
        }

    }

    const changeQuantity = (operator, productId) => {
        let quantity = parseInt(document.getElementById("qty" + productId).value);
        if (operator === '-') {
            if (quantity > 1) {
                quantity -= 1;
                document.getElementById("qty" + productId).value = quantity;
                dispatch(addToCart('update', productId, quantity));
            }
        } else {
            quantity += 1;
            document.getElementById("qty" + productId).value = quantity;
            dispatch(addToCart('update', productId, quantity));
        }
    }

    useEffect(() => {
        document.title = "Giỏ hàng - NS3AE";
    }, []);

    return <>
        <Header />
        <Search />
        <section className="shoping-cart spad">
            <div className="container">

                {
                    cartItems.length === 0 ? <div className="container-fluid mt-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card border-0">
                                    <div className="card-body cart">
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-bag mb-5 text-green" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                            <p className="text-muted">Giỏ hàng của bạn trống</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">
                                <div className="shoping__cart__btns">
                                    <Link to="/" className="primary-btn cart-btn">Mua ngay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                        : <><div className="row">
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
                                            {cartItems.map(item => {
                                                return <tr key={item.product}>
                                                    <td className="shoping__cart__item">
                                                        <Link to={'/product/' + item.product}>
                                                            <img src={item.image} alt={item.name} className="product-img" />
                                                            <h5 >
                                                                <span className="product-cart-name">
                                                                    {item.name}
                                                                </span>
                                                            </h5>
                                                        </Link>
                                                    </td>
                                                    <td className="shoping__cart__price">
                                                        {formatMoney(item.price)}
                                                    </td>
                                                    <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <div className="pro-qty">
                                                                <span className="dec qtybtn" id='dec-qty' onClick={() => changeQuantity('-', item.product)}>-</span>
                                                                <input type="text" id={"qty" + item.product} value={item.qty} />
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
                        </>
                }
            </div>
        </section>
    </>
}

export default CartScreen;