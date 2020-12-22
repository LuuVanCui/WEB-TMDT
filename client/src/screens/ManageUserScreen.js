import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-plain">
            <div className="card-header card-header-primary">
              <h4 className="card-title mt-0">Quản lý người dùng</h4>
              <p className="card-category"> </p>
            </div>
            {
              loading ? <div>Đang tải...</div> :
                error ? <div>{error}</div> :
                  users.length === 0 ? <div>Không có người nào dùng trong database.</div> :
                    <div className="card-body">
                      <div className="table-responsive">
                        <h5 className="mb-3 text-right font-weight-bold">Tổng số người dùng: {users.length}</h5>
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
            }
          </div>
        </div>
      </div>
    </div>

  );
}