import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Trang chủ - NS3AE";
        dispatch(listProducts());
        return () => {
            //
        }
    }, []);

    return loading ? <div>Loading</div> :
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
                    <div className="row featured__filter">
                        {
                            products.map(product => {
                                return <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                    <div className="featured__item">
                                        <div className="featured__item__pic set-bg">
                                            <Link to={'/product/' + product._id}>
                                                <img src={product.image} alt={product.name} />
                                            </Link>
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="#session"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#session"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#session"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6><Link to={'/product/' + product._id}>{product.name}</Link></h6>
                                            <h5>{product.price} VNĐ</h5>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
}

export default HomeScreen;