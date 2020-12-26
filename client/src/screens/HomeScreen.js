import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { formatMoney } from '../common';
function HomeScreen(props) {

    const productList = useSelector(state => state.productList);
    const { totalPages, currentpage, products, loading, error, searchKey } = productList;
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({ page: 1 });
    const pageNumbers = [];
    if (products != null) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }

    useEffect(() => {
        document.title = "Trang chủ - NS3AE";
        dispatch(listProducts(filter.page, searchKey));
        return () => {
        }
    }, [filter]);

    const handlePageChange = (pageNumber) => {
        setFilter({
            page: pageNumber
        });
    };
    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                        </div>
                    </div>
                    {products == null ? <div>Empty</div> :
                        <div className="row featured__filter">
                            {
                                products.map((p) => {
                                    return <div key={p._id} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                        <div className="featured__item">
                                            <div className="featured__item__pic set-bg">
                                                <Link to={'/product/' + p._id}>
                                                    <img src={p.image} alt={p.name} />
                                                </Link>
                                                <ul className="featured__item__pic__hover">
                                                    <li><a href="#session"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#session"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#session"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="featured__item__text">
                                                <h6><Link to={'/product/' + p._id}>{p.name}</Link></h6>
                                                <h5>{formatMoney(parseFloat(p.price))}</h5>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>}
                </div>
                <div className="d-flex justify-content-around">
                    <ul className="pagination">
                        {currentpage == 1 ? <li className="page-item" >
                            <a className="page-link">Trang trước</a>
                        </li> :
                            <li className="page-item" >
                                <a className="page-link" href="#" onClick={() => handlePageChange(filter.page - 1)} >Trang trước</a>
                            </li>
                        }
                        {pageNumbers.map((number) => {
                            if (number == currentpage) {
                                return <li className="page-item active">
                                    <a className="page-link" href="#" onClick={() => handlePageChange(number)}>{number}</a>
                                </li>
                            }
                            else {
                                return <li className="page-item">
                                    <a className="page-link" href="#" onClick={() => handlePageChange(number)}>{number}</a>
                                </li>
                            }

                        })}
                        {currentpage == totalPages ? <li className="page-item" id="a">
                            <a className="page-link">Trang sau</a>
                        </li> :
                            <li className="page-item" id="a">
                                <a className="page-link" href="#" onClick={() => handlePageChange(filter.page + 1)}>Trang sau</a>
                            </li>
                        }
                    </ul>
                </div>
            </section >
}

export default HomeScreen;