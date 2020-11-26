export default function Footer() {
    return(
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#section">About Us</a></li>
                                <li><a href="#section">About Our Shop</a></li>
                                <li><a href="#section">Secure Shopping</a></li>
                                <li><a href="#section">Delivery infomation</a></li>
                                <li><a href="#section">Privacy Policy</a></li>
                                <li><a href="#section">Our Sitemap</a></li>
                            </ul>
                            <ul>
                                <li><a href="#section">Who We Are</a></li>
                                <li><a href="#section">Our Services</a></li>
                                <li><a href="#section">Projects</a></li>
                                <li><a href="#section">Contact</a></li>
                                <li><a href="#section">Innovation</a></li>
                                <li><a href="#section">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__widget__social">
                                <a href="#section"><i className="fa fa-facebook" /></a>
                                <a href="#section"><i className="fa fa-instagram" /></a>
                                <a href="#section"><i className="fa fa-twitter" /></a>
                                <a href="#section"><i className="fa fa-pinterest" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}