import { products } from '../data';

function HomeScreen(props) {
    return <section className="featured spad">
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
                        return <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                    <div className="featured__item">
                                        <div className="featured__item__pic set-bg" style={ { backgroundImage: "url(" + product.image + ")" } } >
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="#session"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#session"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#session"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6><a href="#session">{product.name}</a></h6>
                                            <h5>{product.price}</h5>
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