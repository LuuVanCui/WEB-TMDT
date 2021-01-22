import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import AdminSideBar from "../components/AdminSideBar";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getListBrand } from '../actions/brandAction';
import { Link } from 'react-router-dom';
export default function ManageBrandScreen(props) {
    const listBrand = useSelector(state => state.listBrand);
    const { brands, loading, error } = listBrand;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getListBrand());
        return () => {
        };
    }, []);


    return <div className="container-fluid mt-4 mb-4">
        <div className="row">
            <div className="col-lg-2">
                <AdminSideBar pageName='category' />
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
                                                            <h4 className="card-title mt-0"> Quản lí nhà cung cấp</h4>
                                                            <button className="ml-3"><Link to='/admin/add-category'>Thêm nhà cung cấp</Link></button>
                                                            <h5 className="text-right font-weight-bold ml-auto mt-2">Tổng số loại: {brands === undefined ? 0 : brands.length}</h5>
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
                                                                            Nhà cung cấp
                                                                    </th>
                                                                        <th>
                                                                            Mô tả
                                                                    </th>
                                                                        <th>
                                                                            Thao tác
                                                                    </th>
                                                                    </tr></thead>
                                                                <tbody>
                                                                    {brands.map((brand) => (
                                                                        <tr>
                                                                            <td>
                                                                                {brand._id}
                                                                            </td>
                                                                            <td>
                                                                                {brand.name}
                                                                            </td>
                                                                            <td>
                                                                                {brand.description}
                                                                            </td>
                                                                            <td>
                                                                                <Link to={'/admin/brand/' + brand._id}><i class="fa fa-edit"></i></Link> &nbsp;
                                                                            <Link to={'/admin/brand/' + brand._id}><i class="fa fa-trash"></i></Link>
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
    </div >
}