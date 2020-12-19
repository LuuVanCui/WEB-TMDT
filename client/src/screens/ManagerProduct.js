export default function ManagerProduct(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-plain">
            <div className="card-header card-header-primary">
              <h4 className="card-title mt-0"> Quản lí sản phẩm</h4>
              <p className="card-category"> </p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className>
                    <tr><th>
                      ID
                        </th>
                      <th>
                        Tên sản phẩm
                        </th>
                      <th>
                        Thể loại
                        </th>
                      <th>
                        Giá
                        </th>
                      <th>
                        Thao tác
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
                    </tr>
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
                    </tr>
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