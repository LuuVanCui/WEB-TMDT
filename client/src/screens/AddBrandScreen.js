import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBrand } from "../actions/brandAction";
import AdminSideBar from "../components/AdminSideBar";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function AddBrandScreen(props) {

    const addBrandStore = useSelector(state => state.addBrand);
    const { addSuccess, loading, error } = addBrandStore;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [check, setCheck] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setCheck(true);
        dispatch(addBrand(name, description))
    }
    if (check === true && addSuccess) {
        props.history.push('/admin/manage-brand');
    }
    useEffect(() => {
        return () => {
        };
    }, [addBrandStore]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <AdminSideBar pageName='brand' />
                </div>
                <div className="col-lg-10">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <h2 className="tm-block-title d-inline-block center-text">Thêm nhà cung cấp</h2>
                    </div>
                    {/* {
                        loading ? <LoadingBox variant="danger">{error}</LoadingBox> : ''
                    } */}
                    <div className="form-content">
                        <form onSubmit={handleSubmit} className="tm-edit-product-form">
                            <div className="form-group mb-3">
                                <label htmlFor="name">Tên nhà cung cấp</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control validate"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {
                                error ? <MessageBox variant="danger">Tên nhà cung cấp đã tồn tại!</MessageBox> : ''
                            }
                            <div className="form-group mb-3">
                                <label htmlFor="description">Mô tả</label>
                                <textarea
                                    id="description"
                                    className="form-control validate"
                                    rows={3}
                                    defaultValue={""}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn-active p-3 btn-block text-uppercase mb-3">Thêm nào!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}