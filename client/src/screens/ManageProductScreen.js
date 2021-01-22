import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { listProducts, deleteProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import AdminSideBar from "../components/AdminSideBar";
export default function ManageProductScreen() {

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
    document.title = 'Quản lý sản phẩm - NS3AE';
    dispatch(listProducts(filter.page, searchKey));
    return () => {
    };
  }, [filter]);

  return <div className="container-fluid mt-4 mb-4">
    <div className="row">
      <div className="col-lg-2">
        <AdminSideBar pageName="product" />
      </div>
      {loading ? <LoadingBox /> :
        error ? <MessageBox variant="danger">{error}</MessageBox> :
          <div className="card card-plain col-lg-10">
            <div className="card-header card-header-primary">
              <div className="d-flex">
                <h4 className="card-title mt-0"> Quản lí sản phẩm</h4>
                <button className="ml-3"><Link to='/admin/add-product'>Thêm sản phẩm</Link></button>
                <h5 className="text-right font-weight-bold ml-auto mt-2">Tổng số sản phẩm: {products === undefined ? 0 : products.length}</h5>
              </div>
              <p className="card-category"> </p>
            </div>
            {
              products.length === 0 ? <h1>Không có sản phẩm.</h1> :
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className>
                        <tr>
                          <th>
                            Tên
                            </th>
                          <th>
                            Mô tả
                            </th>
                          <th>
                            Thể loại
                            </th>
                          <th>
                            Nhà cung cấp
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
                </div>
            }

            <div className="d-flex justify-content-around mb-3">
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
      }
    </div>
  </div >
}