import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useEffect, useState } from 'react';
import { detailBrand, updateBrand } from '../actions/brandAction';
import AdminSideBar from '../components/AdminSideBar';

export default function UpdateBrandScreen(props) {
    const id = props.match.params.id;
    const brandUpdate = useSelector(state => state.updateBrand);
    const brandDetail = useSelector(state => state.detailBrand);
    const { updateSuccess, loading, error } = brandUpdate;
    // const { updateSuccess, loading, error } = updateBrand;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        setCheck(true);
        dispatch(updateBrand(id, name, description));
    }
    if (check === true && updateSuccess) {
        props.history.push('/admin/manage-brand');
    }
    useEffect(() => {
        dispatch(detailBrand(id));
        return () => {
        };
    }, []);
    useEffect(() => {
        if (brandDetail.brand) {
            setName(brandDetail.brand.name);
            setDescription(brandDetail.brand.description);
        }
    }, [brandDetail]);
    useEffect(() => {
        return () => {
        };
    }, [brandUpdate]);
    return <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-lg-2">
                <AdminSideBar pageName='brand' />
            </div>
            {brandDetail.loading ? <LoadingBox /> :
                brandDetail.error ? <MessageBox variant="danger">{brandDetail.error}</MessageBox> :
                    loading ? <LoadingBox /> :
                        error ? <MessageBox variant="danger">{error}</MessageBox> :
                            <div className="col-lg-10">
                                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                                    <h2 className="tm-block-title d-inline-block center-text">Cập nhật nhà cung cấp</h2>
                                </div>
                                <div className="form-content">
                                    <form onSubmit={handleSubmit} className="tm-edit-product-form">
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Tên nhà cung cấp</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control validate"
                                                value={name}
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        {error ? <MessageBox variant="danger">Tên sản phẩm đã tồn tại</MessageBox> : ''}
                                        <div className="form-group mb-3">
                                            <label htmlFor="description">Mô tả</label>
                                            <textarea
                                                id="description"
                                                className="form-control validate"
                                                rows={3}
                                                onChange={e => setDescription(e.target.value)}
                                            >{brandDetail.brand.description}</textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn-active p-3 btn-block text-uppercase mb-3">Cập nhật ngay!</button>
                                        </div>
                                    </form>
                                </div>
                            </div>}
        </div>
    </div>
}