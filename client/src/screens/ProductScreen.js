import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartAction';
import { formatMoney } from '../common';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Header from '../components/Header';
import Search from '../components/SearchSreen';
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
        dispatch(addToCart('add', props.match.params.id, qty));
        // props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
        props.history.push('/cart');
    }

    const decQuantity = () => {
        if (parseFloat(document.getElementById("qty").value > 1)) {
            document.getElementById("qty").value = parseFloat(document.getElementById("qty").value) - 1;
            setQty(parseFloat(document.getElementById("qty").value));
        }
    }

    const incQuantity = () => {
        document.getElementById("qty").value = parseFloat(document.getElementById("qty").value) + 1;
        setQty(parseFloat(document.getElementById("qty").value));
    }

    return <>
        <Header />
        <Search />
        {loading ? <LoadingBox /> :
            error ? <MessageBox variant="danger">{error}</MessageBox> :
                <section className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__pic">
                                    <div className="product__details__pic__item">
                                        <img className="product__details__pic__item--large" src={product.image} alt={product.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>{product.name}</h3>
                                    <div className="product__details__price">{formatMoney(parseFloat(product.price))}</div>
                                    <p>{product.description}</p>
                                    {
                                        product.quantity > 0 &&
                                        <>
                                            <div className="product__details__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <span className="dec qtybtn" id="dec-qty" onClick={decQuantity}>-</span>
                                                        <input type="text" id="qty" defaultValue={1} />
                                                        <span className="inc qtybtn" id="inc-qty" onClick={incQuantity}>+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="primary-btn" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                                        </>
                                    }
                                    <ul>
                                        <li><b>Trạng thái</b>
                                            <span>
                                                {
                                                    product.quantity > 0 ? `Còn ${product.quantity} sản phẩm` : 'Hết hàng'
                                                }
                                            </span>
                                        </li>
                                        <li><b>Khối lượng</b> <span>{product.weight} kg</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
    </>
}

export default ProductScreen;