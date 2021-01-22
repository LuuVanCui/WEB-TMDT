import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { formatMoney } from '../common';

export default function Header() {
    const dispatch = useDispatch();
    const handleHome = () => {
        dispatch(listProducts());
    }
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    return <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="header__logo">
                    <Link to='/' onClick={handleHome}><img src="/img/logo.png" alt="" style={{ width: '130px' }} /></Link>
                </div>
            </div>
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        <li className="active"><Link to="/">Trang Chủ</Link></li>

                        <li><Link href="./contact.html">Liên hệ</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-3">
                <div className="header__cart">
                    <ul>
                        <li><Link to="/cart"><i className="fa fa-shopping-bag" /> <span>{cartItems.length}</span></Link></li>
                    </ul>
                    <div className="header__cart__price">Tổng: <span>{formatMoney(cartItems.reduce((a, c) => a + c.price * c.qty, 0))}</span></div>
                </div>
            </div>
        </div>
        <div className="humberger__open">
            <i className="fa fa-bars" />
        </div>
    </div>
}