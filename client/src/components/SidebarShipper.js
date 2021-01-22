import React from 'react';
import { Link } from 'react-router-dom';
export default function SidebarShipper() {
    return (
        <div className="list-group ">
            <Link to="/shipper/order-new" className="list-group-item list-group-item-action">Đơn hàng mới</Link>
            <Link to="/shipper/order-delivery" className="list-group-item list-group-item-action ">Đơn hàng đã nhận</Link>
            <Link to="/shipper/delivery/success" className="list-group-item list-group-item-action  btn-active">Đơn hàng giao thành công</Link>
            <Link to="/shipper/delivery/fail" className="list-group-item list-group-item-action">Đơn hàng giao không thành công</Link>
            <Link to="/userInfo" className="list-group-item list-group-item-action">Thông tin cá nhân</Link>
        </div>
    )
}