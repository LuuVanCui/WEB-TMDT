import { detailsProduct } from '../actions/productActions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../actions/productActions'

export default function UpdateProduct(props) {
    const productID = props.match.params.id;
    const productDetail = useSelector(state => state.productDetails);
    const { product } = productDetail;
    const [name, setName] = useState('');
    const [categoryname, setCategoryname] = useState('');
    const [brandname, setBrandname] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [weight, setWeight] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(
            productID, name, categoryname, brandname, description, image, quantity, price, weight
        ));
        props.history.push('/admin/managerProduct');
    };
    useEffect(() => {
        dispatch(detailsProduct(productID));
        return () => {
        };
    }, []);
    useEffect(() => {
        if (product) {
            setName(product.name);
            setBrandname(product.brandname);
            setCategoryname(product.categoryname);
            setDescription(product.description);
            setImage(product.image);
            setPrice(product.price);
            setQuantity(product.quantity);
            setWeight(product.weight);
        }
        return () => { };
    }, [product])
    return loading ? <div>Loading...{console.log('3')}</div> :
        error ? <div>{error}</div> :
            <div>
                <Slidebar />
                <div classname="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="tm-block-title d-inline-block">Cập nhật sản phẩm</h2>
                                    </div>
                                </div>
                                <div className="row tm-edit-product-row">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <form onSubmit={handleSubmit} className="tm-edit-product-form">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">Tên sản phẩm</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="form-control validate"
                                                    required
                                                    value={name}
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
                                                    value={description}
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
                                                    value={categoryname}
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
                                                    value={brandname}
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
                                                    value={quantity}
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
                                                    value={price}
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
                                                    value={weight}
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
                                                    value={image}
                                                    onChange={(e) => setImage(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary btn-block text-uppercase">Cập nhật</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}