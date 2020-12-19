import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
export default function ManagerProduct(props) {
  const productList = useSelector(state => state.productList)
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const handleDeleted = () => {
    if (window.confirm('Bạn muốn xóa sản phẩm này không')) {
      dispatch(listProducts())
      alert('Đã xóa');
    }
  }

  useEffect(() => {
    document.title = 'Admin-ProductManager';
    dispatch(listProducts());
    return () => {
    };
  }, []);

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-plain">
              <div className="card-header card-header-primary">
                <div className="row">
                  <h4 className="card-title mt-0"> Quản lí sản phẩm</h4>
                  <Link to={'/admin/addProduct'}>Thêm sản phẩm</Link>
                </div>
                <p className="card-category"> </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className>
                      <tr>
                        <th>
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
                      {products.map((product) => {
                        return <tr>
                          <td>
                            123
                        </td>
                          <td>
                            {product.name}
                          </td>
                          <td>
                            {product.categoryname}
                          </td>
                          <td>
                            {product.brandname}
                          </td>
                          <td>
                            {product.description}
                          </td>
                          <td>
                            {product.price}
                          </td>

                          <td>
                            <span>
                              <Link to={'/admin/addProduct'}>Sửa</Link>/
                              <Link onClick={handleDeleted}>Xóa</Link>
                            </span>

                          </td>
                        </tr>
                      }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    ;
}