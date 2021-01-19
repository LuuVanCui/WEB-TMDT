import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function Header() {
    const dispatch = useDispatch();
    const handleHome = () => {
        dispatch(listProducts());
    }

    return <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="header__logo">
                    <Link to='/' onClick={handleHome}><img src="/img/logo.png" alt="" /></Link>
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
                        <li><Link to="/cart"><i className="fa fa-shopping-bag" /> <span>3</span></Link></li>
                    </ul>
                    <div className="header__cart__price">Tổng: <span>$150.00</span></div>
                </div>
            </div>
        </div>
        <div className="humberger__open">
            <i className="fa fa-bars" />
        </div>
    </div>
}