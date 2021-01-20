import React from 'react';
import { Link } from "react-router-dom";

export default function AdminSideBar({ pageName }) {
    return <div className="nav-left">
        <ul>
            <li className={pageName === 'order' ? 'btn-active' : ''}><Link to='/admin/manage-order'>Đơn hàng</Link></li>
            <li className={pageName === 'product' ? 'btn-active' : ''}><Link to='/admin/manage-product'>Sản phẩm</Link></li>
            <li className={pageName === 'user' ? 'btn-active' : ''}><Link to='/admin/manage-user'>Người dùng</Link></li>
            <li className={pageName === 'category' ? 'btn-active' : ''}><Link to='/admin/manage-category'>Loại sản phẩm</Link></li>
        </ul>
    </div>
}

