import CartItem from './CartItem';

export default function ShoppingCart() {
    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                    <CartItem img="img/cart/cart-3.jpg" name="Organic Bananas" price="$19" total="$39.99"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
            Upadate Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>$454.98</span></li>
                                <li>Total <span>$454.98</span></li>
                            </ul>
                            <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}