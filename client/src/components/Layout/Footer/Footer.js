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
                                <li>Address: Số 1, Võ Văn Ngân, Thủ Đức</li>
                                <li>Phone: +84 0912.123.123</li>
                                <li>Email: NS3AE@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                       
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