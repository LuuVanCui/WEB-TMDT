import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className>
                    <tr>
                      <th>
                        User ID
                      </th>
                      <th>
                        Username
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
                    <tr>
                      <td>
                        123
                        </td>
                      <td>
                        Son 3ce
                        </td>
                      <td>
                        Son thỏi
                        </td>
                      <td>
                        300,000 vnđ
                        </td>
                      <td>
                        <span><a href="#session">Sửa</a>/<a href="#session">Xóa</a></span>
                      </td>
                      <td>
                        Ahihi
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}