import FeatureItem from './FeatureItem'

export default function Features() {
    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        {products.map(product => {
                            return <FeatureItem
                            img={product.product_img}
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name={product.product_name}
                            price={product.product_price}
                        />
                        })}
                        
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                        <FeatureItem
                            img="img/featured/feature-2.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                        <FeatureItem
                            img="img/featured/feature-3.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                        <FeatureItem
                            img="img/featured/feature-4.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <FeatureItem
                            img="img/featured/feature-5.jpg "
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                        <FeatureItem
                            img="img/featured/feature-6.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <FeatureItem
                            img="img/featured/feature-7.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                        <FeatureItem
                            img="img/featured/feature-8.jpg"
                            hrefHeart="#section"
                            hrefRetweeet="#section"
                            hrefShoppongCart="#section"
                            href="#section"
                            name="Crab Pool Security"
                            price="30.00"
                        />
                    </div>
                </div>
            </div>
        </section>


    );
}