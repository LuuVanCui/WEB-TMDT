import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions'
import MessageBox from '../components/MessageBox';
import { Link } from "react-router-dom";
import AdminSideBar from '../components/AdminSideBar';

export default function AddProductScreean(props) {
  const productList = useSelector(state => state.productList);
  const { error, products } = productList;
  const [name, setName] = useState('');
  const [categoryname, setCategoryname] = useState('');
  const [brandname, setBrandname] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(true);
    dispatch(addProduct(
      name, categoryname, brandname, description, image, quantity, price, weight
    ));
  };
  if (check === true && products) {
    alert('Thêm sản phẩm thành công');
    props.history.push('/admin/manager-product');
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <AdminSideBar pageName='product' />
        </div>
        <div className="col-lg-10">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <h2 className="tm-block-title d-inline-block center-text">Thêm sản phẩm</h2>
          </div>
          <div className="form-content">
            <form onSubmit={handleSubmit} className="tm-edit-product-form">
              <div className="form-group mb-3">
                <label htmlFor="name">Tên sản phẩm</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control validate"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                {
                  error ? <MessageBox variant="danger">{error}</MessageBox> : ''
                }
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  className="form-control validate"
                  rows={3}
                  required
                  defaultValue={""}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="category">Loại sản Phẩm</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="form-control validate"
                  required
                  onChange={(e) => setCategoryname(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="brand">Nhà cung cấp sản Phẩm</label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  className="form-control validate"
                  required
                  onChange={(e) => setBrandname(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="stock">Số lượng
                        </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  className="form-control validate"
                  required
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="price">Giá bán</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="form-control validate"
                  required
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="weight">Khối lượng</label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  className="form-control validate"
                  required
                  step="any"
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="image">Link hình ảnh</label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  className="form-control validate"
                  required
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn-active p-3 btn-block text-uppercase mb-3">Thêm ngay nào!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}