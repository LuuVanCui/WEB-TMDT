// import AdminSideBar from "../components/AdminSideBar";


// export default function AddBrandScreen(props) {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-lg-2">
//                     <AdminSideBar pageName='category' />
//                 </div>
//                 <div className="col-lg-10">
//                     <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
//                         <h2 className="tm-block-title d-inline-block center-text">Thêm loại sản phẩm</h2>
//                     </div>
//                     <div className="form-content">
//                         <form onSubmit={handleSubmit} className="tm-edit-product-form">
//                             <div className="form-group mb-3">
//                                 <label htmlFor="name">Tên loại</label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     className="form-control validate"
//                                     required
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                             </div>
//                             <div className="form-group mb-3">
//                                 <label htmlFor="description">Mô tả</label>
//                                 <textarea
//                                     id="description"
//                                     className="form-control validate"
//                                     rows={3}
//                                     defaultValue={""}
//                                     onChange={e => setDescription(e.target.value)}
//                                 />
//                             </div>
//                             <div className="col-12">
//                                 <button type="submit" className="btn-active p-3 btn-block text-uppercase mb-3">Thêm nào!</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }