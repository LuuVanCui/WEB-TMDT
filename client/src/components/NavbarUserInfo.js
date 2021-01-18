import React from 'react';
import { Link } from 'react-router-dom';
export default function NavbarUserInfo() {

    const onclick = (id) => {
        alert(id)
        document.getElementById(id).classList.add('btn-active');

    };
    return <div className="list-group ">
        <Link to='/userInfo' className="list-group-item list-group-item-action" id="1" onClick={() => onclick(1)}>Thông tin của tôi</Link>
        <Link to='/order-history' className="list-group-item list-group-item-action" id="2" onClick={() => onclick(2)}>Lịch sử đặt hàng</Link>
        <Link href="#" className="list-group-item list-group-item-action">Số dư tài khoản</Link>
    </div>
}