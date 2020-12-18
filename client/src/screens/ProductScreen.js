import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { formatMoney } from '../common';

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
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

    const handleAddToCart = () => {
        props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
    }

    const decQuantity = () => {
        if (document.getElementById("qty").value > 1) {
            document.getElementById("qty").value = parseInt(document.getElementById("qty").value) - 1;
            setQty(document.getElementById("qty").value);
        }
    }

    const incQuantity = () => {
        document.getElementById("qty").value = parseInt(document.getElementById("qty").value) + 1;
        setQty(document.getElementById("qty").value);
    }

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
                                <div className="product__details__price">{formatMoney(product.price)}</div>
                                <p>{product.description}</p>
                                {
                                    product.quantity > 0 &&
                                    <>
                                        <div className="product__details__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <span class="dec qtybtn" id="dec-qty" onClick={decQuantity}>-</span>
                                                    <input type="text" id="qty" defaultValue={1} />
                                                    <span class="inc qtybtn" id="inc-qty" onClick={incQuantity}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="primary-btn" onClick={handleAddToCart}>ADD TO CARD</button>
                                    </>
                                }

                                <ul>
                                    <li><b>Status</b>
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