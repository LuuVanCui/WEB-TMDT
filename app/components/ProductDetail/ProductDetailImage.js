
export default function DetailItem(props) {
    return (
        <div className="product__details__pic">
            <div className="product__details__pic__item">
                <img className="product__details__pic__item--large" src={props.imgLarge} alt />
            </div>
            <div className="product__details__pic__slider owl-carousel">
                <img data-imgbigurl="img/product/details/product-details-2.jpg" src={props.img1} alt />
                <img data-imgbigurl="img/product/details/product-details-3.jpg" src={props.img2} alt />
                <img data-imgbigurl="img/product/details/product-details-5.jpg" src={props.img3} alt />
                <img data-imgbigurl="img/product/details/product-details-4.jpg" src={props.img4} alt />
            </div>
        </div>
        
    );
}