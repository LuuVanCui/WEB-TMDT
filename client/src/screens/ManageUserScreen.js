import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ManageUserScreen(props) {
  const userList = useSelector(state => state.userList);
  const { users, loading, error } = userList;
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Quản lý người dùng - NS3AE";
    dispatch(listUsers());
    return () => {
      //
    }
  }, []);

  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="row">
        <div className="col-lg-2">
          <div className="nav-left">
            <ul>
              <li><Link to='/admin/manage-order'>Đơn hàng</Link></li>
              <li><Link to='/admin/manage-product'>Sản phẩm</Link></li>
              <li className="btn-active"><Link to='/admin/manage-user'>Người dùng</Link></li>
            </ul>
          </div>
        </div>
        <div className="wrapper col-lg-10">
          <div className="main-panel">
            <div className="content">
              <div>
                {
                  loading ? <LoadingBox /> :
                    error ? <MessageBox variant="danger">{error}</MessageBox> :
                      users.length === 0 ? <div>Không có người nào dùng trong database.</div> :
                        <div className="card card-plain">
                          <div className="card-header card-header-primary d-flex">
                            <h4 className="card-title mt-0"> Quản lí người dùng</h4>
                            <h5 className="text-right font-weight-bold ml-auto mt-2">Tổng số người dùng: {users.length}</h5>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead >
                                  <tr>
                                    <th>
                                      User ID
                                    </th>
                                    <th>
                                      Tên người dùng
                                    </th>
                                    <th>
                                      Email
                                    </th>
                                    <th>
                                      Số điện thoại
                                    </th>
                                    <th>
                                      Địa chỉ
                                    </th>
                                    <th>
                                      Loại người dùng
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users.map(user => {
                                    return <tr>
                                      <td>
                                        {user._id}
                                      </td>
                                      <td>
                                        {user.name}
                                      </td>
                                      <td>
                                        {user.email}
                                      </td>
                                      <td>
                                        {user.phone}
                                      </td>
                                      <td>
                                        {user.address}
                                      </td>
                                      <td>
                                        {user.role}
                                      </td>
                                    </tr>
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}