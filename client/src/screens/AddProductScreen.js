import Slidebar from '../components/Admin/Slidebar';
import { useState } from 'react';
export default function AddProductScreean(props) {
  const [name, setName] = useState('');
  const [categoryname, setCategoryname] = useState('');
  const [brandname, setBrandname] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');

<<<<<<< HEAD

  return (
    <div>
      <Slidebar />
      <div classname="container">
=======
  return (
    <div>
      <Slidebar />
      <div classname="container tm-mt-big tm-mb-big" style={{ padding: '15px' }}>
>>>>>>> 19b8b0f (amin)
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
<<<<<<< HEAD
                  <h2 className="tm-block-title d-inline-block">Thêm sản phẩm</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <form action className="tm-edit-product-form">
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
=======
                  <h2 className="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form action className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name
                </label>
                      <input id="name" name="name" type="text" className="form-control validate" required />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea className="form-control validate" rows={3} required defaultValue={""} />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
>>>>>>> 19b8b0f (amin)
                      <select className="custom-select tm-select-accounts" id="category">
                        <option selected>Select category</option>
                        <option value={1}>New Arrival</option>
                        <option value={2}>Most Popular</option>
                        <option value={3}>Trending</option>
                      </select>
                    </div>
<<<<<<< HEAD
                    <div className="form-group mb-3">
                      <label htmlFor="brand">Nhà cung cấp sản Phẩm</label>
                      <select className="custom-select tm-select-accounts" id="brand">
                        <option selected>Select brand</option>
                        <option value={1}>New Arrival</option>
                        <option value={2}>Most Popular</option>
                        <option value={3}>Trending</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="stock">Số lượng
                        </label>
                        <input id="stock" name="stock" type="text" className="form-control validate" required />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="name">khối lượng</label>
                      <input id="weight" name="weight" type="text" className="form-control validate" required />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Link hình ảnh</label>
                      <input id="name" name="name" type="text" className="form-control validate" required />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
                    </div>
                  </form>

=======
                    <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="expire_date">Expire Date
                  </label>
                        <input id="expire_date" name="expire_date" type="text" className="form-control validate" data-large-mode="true" />
                      </div>
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                        <label htmlFor="stock">Units In Stock
                  </label>
                        <input id="stock" name="stock" type="text" className="form-control validate" required />
                      </div>
                    </div>
                  </form></div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  <div className="tm-product-img-dummy mx-auto">
                    <i className="fas fa-cloud-upload-alt tm-upload-icon" onclick="document.getElementById('fileInput').click();" />
                  </div>
                  <div className="custom-file mt-3 mb-3">
                    <input id="fileInput" type="file" style={{ display: 'none' }} />
                    <input type="button" className="btn btn-primary btn-block mx-auto" defaultValue="UPLOAD PRODUCT IMAGE" onclick="document.getElementById('fileInput').click();" />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
>>>>>>> 19b8b0f (amin)
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}