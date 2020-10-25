import ProductDetailItem from './ProductDetailImage';
import ProductDetailText from './ProductDtailText';
import ProductDetialTab from './ProductDetailTab';
export default function ProductDetail() {
    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <ProductDetailItem
                            imgLarge="img/product/details/product-details-1.jpg"
                            mg1="img/product/details/thumb-1.jpg"
                            img2="img/product/details/thumb-2.jpg"
                            img3="img/product/details/thumb-3.jpg"
                            img4="img/product/details/thumb-4.jpg"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ProductDetailText
                            productName="Vetgetable’s Packag"
                            productPrice="50.000"
                            productDiscription="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam"
                            productAvailability="In stock"
                            productShipping="05 day shipping."
                            productWeight="0.5 kg"
                            faceLink=""
                            instaLink=""
                            twitterLink=""
                            printerestLink=""
                        />
                    </div>
                    <div className="col-lg-12">

                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">

                                <ProductDetialTab
                                    idTab="tabs-1"
                                    tabHeadDesc="Products Infomation"
                                    tabDetailDesc="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                  vel, ullamcorper sit amet ligula. Proin eget tortor risus"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}