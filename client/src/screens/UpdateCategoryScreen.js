import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import AdminSideBar from '../components/AdminSideBar';
import { categoryDetail, updateCategory } from '../actions/categoryAction';
import LoadingBox from '../components/LoadingBox';

export default function UpdateCategoryScreen(props) {
    const categoryDetails = useSelector(state => state.categoryDetails);
    const { category, loading, error } = categoryDetails;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    document.title = 'Cập nhật loại sản phẩm - NS3AE';
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategory(props.match.params.id, name, description));
        props.history.push('/admin/manage-category');
    };

    useEffect(() => {
        dispatch(categoryDetail(props.match.params.id));
    }, []);

    useEffect(() => {
        if (category) {
            setName(category.name);
            setDescription(category.description);
        }
    }, [category]);

    return loading ? <LoadingBox /> :
        error ? <MessageBox variant="danger">{error}</MessageBox> :
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-lg-2">
                        <AdminSideBar pageName='category' />
                    </div>
                    <div className="col-lg-10">
                        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                            <h2 className="tm-block-title d-inline-block center-text">Cập nhật loại sản phẩm</h2>
                        </div>
                        <div className="form-content">
                            <form onSubmit={handleSubmit} className="tm-edit-product-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Tên loại</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control validate"
                                        value={name}
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="description">Mô tả</label>
                                    <textarea
                                        id="description"
                                        className="form-control validate"
                                        rows={3}
                                        onChange={e => setDescription(e.target.value)}
                                    >{description}</textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn-active p-3 btn-block text-uppercase mb-3">Cập nhật ngay!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
}