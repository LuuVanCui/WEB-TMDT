import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { listProducts, deleteProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
export default function ManagerProduct(props) {

  const productList = useSelector(state => state.productList);
  const { totalPages, currentpage, products, loading, error, searchKey } = productList;
  const [filter, setFilter] = useState({ page: 1 });

  const dispatch = useDispatch();

  const handleDeleted = (productID) => {
    if (window.confirm('Bạn muốn xóa sản phẩm này không')) {
      dispatch(deleteProduct(productID));
      alert('Đã xóa');
    }
  }
  const pageNumbers = [];
  if (products !== null) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }
  const handlePageChange = (pageNumber) => {
    setFilter({
      page: pageNumber
    });
  };
  useEffect(() => {
    document.title = 'Admin-ProductManager';
    dispatch(listProducts(filter.page, searchKey));
    return () => {
    };
  }, [filter]);

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-plain">
              <div className="card-header card-header-primary">
                <div className="row">
                  <h4 className="card-title mt-0"> Quản lí sản phẩm</h4>
                  <Link to='/admin/addProduct'>Thêm sản phẩm</Link>
                </div>
                <p className="card-category"> </p>
              </div>
              {
                products != null ?
                  (<div className="card-body">
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
                              Mô tả
                            </th>
                            <th>
                              Thể loại
                            </th>
                            <th>
                              Nhà cung cấp sản phẩm
                            </th>
                            <th>
                              Số lượng
                            </th>
                            <th>
                              Giá
                            </th>
                            <th>
                              Khối lượng
                            </th>
                            <th>
                              Hình ảnh
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
                                {product._id}
                              </td>
                              <td>
                                {product.name}
                              </td>
                              <td>
                                {product.description}
                              </td>
                              <td>
                                {product.categoryname}
                              </td>
                              <td>
                                {product.brandname}
                              </td>
                              <td>
                                {product.quantity}
                              </td>
                              <td>
                                {product.price}
                              </td>
                              <td>
                                {product.weight}
                              </td>
                              <td>
                                <img src={product.image} alt="" className="img-manage-product" />
                              </td>
                              <td>
                                <span>
                                  <Link to={'/admin/updateProduct/' + product._id}>Sửa</Link>/
                              <button onClick={() => handleDeleted(product._id)}>Xóa</button>
                                </span>

                              </td>
                            </tr>
                          }
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>) :
                  <div>Product Empty!</div>
              }

              <div className="d-flex justify-content-around">
                <ul className="pagination">
                  {currentpage === 1 ? <li className="page-item" >
                    <a className="page-link">Trang trước</a>
                  </li> :
                    <li className="page-item" >
                      <a className="page-link" href="#Session" onClick={() => handlePageChange(filter.page - 1)} >Trang trước</a>
                    </li>
                  }
                  {pageNumbers.map((number) => {
                    if (number === currentpage) {
                      return <li className="page-item active">
                        <a className="page-link" href="#Session" onClick={() => handlePageChange(number)}>{number}</a>
                      </li>
                    }
                    else {
                      return <li className="page-item">
                        <a className="page-link" href="#Session" onClick={() => handlePageChange(number)}>{number}</a>
                      </li>
                    }

                  })}
                  {currentpage === totalPages ? <li className="page-item" id="a">
                    <a className="page-link">Trang sau</a>
                  </li> :
                    <li className="page-item" id="a">
                      <a className="page-link" href="#Session" onClick={() => handlePageChange(filter.page + 1)}>Trang sau</a>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    ;
}