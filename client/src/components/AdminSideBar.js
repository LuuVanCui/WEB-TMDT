import React from 'react';
import { Link } from "react-router-dom";

export default function AdminSideBar({ pageName }) {
    return <div className="nav-left">
        <ul>
            <Link to='/admin/manage-order'><li className={pageName === 'order' ? 'btn-active' : ''}>Đơn hàng</li></Link>
            <Link to='/admin/manage-product'><li className={pageName === 'product' ? 'btn-active' : ''}>Sản phẩm</li></Link>
            <Link to='/admin/manage-user'><li className={pageName === 'user' ? 'btn-active' : ''}>Người dùng</li></Link>
            <Link to='/admin/manage-category'><li className={pageName === 'category' ? 'btn-active' : ''}>Loại sản phẩm</li></Link>
            <Link to='/admin/manage-brand'><li className={pageName === 'brand' ? 'btn-active' : ''}>Nhà cung cấp</li></Link>
        </ul>
    </div>
}

