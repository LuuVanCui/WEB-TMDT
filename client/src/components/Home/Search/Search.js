
export default function Search() {
    return(
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars" />
                                <span>All departments</span>
                            </div>
                            <ul style={{ display: 'none' }}>
                                <li><a href="#section">Fresh Meat</a></li>
                                <li><a href="#section">Vegetables</a></li>
                                <li><a href="#section">Fruit &amp; Nut Gifts</a></li>
                                <li><a href="#section">Fresh Berries</a></li>
                                <li><a href="#section">Ocean Foods</a></li>
                                <li><a href="#section">Butter &amp; Eggs</a></li>
                                <li><a href="#section">Fastfood</a></li>
                                <li><a href="#section">Fresh Onion</a></li>
                                <li><a href="#section">Papayaya &amp; Crisps</a></li>
                                <li><a href="#section">Oatmeal</a></li>
                                <li><a href="#section">Fresh Bananas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                <span className="arrow_carrot-down" />
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}