import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Sản phẩm - NS3AE";
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, []);

    return loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    <img className="product__details__pic__item--large" src={product.image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__text">
                                <h3>{product.name}</h3>
                                <div className="product__details__price">${product.price}</div>
                                <p>{product.description}</p>
                                <div className="product__details__quantity">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" defaultValue={1} />
                                        </div>
                                    </div>
                                </div>
                                <a href="#session" className="primary-btn">ADD TO CARD</a>
                                <ul>
                                    <li><b>Availability</b>
                                        <span>
                                            {
                                                product.quantity > 0 ? 'In Stock' : 'Out of Stock'
                                            }
                                        </span>
                                    </li>
                                    <li><b>Weight</b> <span>{product.weight} kg</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
}

export default ProductScreen;