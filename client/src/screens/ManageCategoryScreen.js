import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listCategories } from '../actions/categoryAction';

export default function ManageCategoryScreen() {

    const categoryList = useSelector(state => state.listCategories);
    const { loading, error, categories } = categoryList;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Quản lý loại sản phẩm - NS3AE';
        dispatch(listCategories());
    }, []);

    return <div className="container-fluid mt-4 mb-4">
        <div className="row">
            <div className="col-lg-2">
                <div className="nav-left">
                    <ul>
                        <li><Link to='/admin/manage-order'>Đơn hàng</Link></li>
                        <li><Link to='/admin/manage-product'>Sản phẩm</Link></li>
                        <li><Link to='/admin/manage-user'>Người dùng</Link></li>
                        <li className="btn-active"><Link to='/admin/manage-category'>Loại sản phẩm</Link></li>
                    </ul>
                </div>
            </div>
            <div className="wrapper col-lg-10">
                <div className="main-panel">
                    <div className="content">
                        <div>
                            {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                                        <div>
                                            <div>
                                                <div className="card card-plain">
                                                    <div className="card-header card-header-primary">
                                                        <div className="d-flex">
                                                            <h4 className="card-title mt-0"> Quản lí loại sản phẩm</h4>
                                                            <button className="ml-3"><Link to='/admin/add-category'>Thêm loại</Link></button>
                                                            <h5 className="text-right font-weight-bold ml-auto mt-2">Tổng số loại: {categories.length}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover">
                                                                <thead className>
                                                                    <tr><th>
                                                                        ID
                                                                        </th>
                                                                        <th>
                                                                            Tên loại
                                                                        </th>
                                                                        <th>
                                                                            Mô tả
                                                                        </th>
                                                                        <th>
                                                                            Thao tác
                                                                        </th>
                                                                    </tr></thead>
                                                                <tbody>
                                                                    {categories.map((category) => (
                                                                        <tr>
                                                                            <td>
                                                                                {category._id}
                                                                            </td>
                                                                            <td>
                                                                                {category.name}
                                                                            </td>
                                                                            <td>
                                                                                {category.description}
                                                                            </td>
                                                                            <td>
                                                                                <button>Duyệt</button> &nbsp;
                                                                                <button>Hủy</button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}