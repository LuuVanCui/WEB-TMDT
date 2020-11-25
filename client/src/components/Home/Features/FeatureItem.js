export default function FeatureItem(props) {
    return (

        <div className="featured__item">
            <div className="featured__item__pic set-bg" data-setbg={props.img}>
                <ul className="featured__item__pic__hover">
                    <li><a href={props.hrefHeart}><i className="fa fa-heart" /></a></li>
                    <li><a href={props.hrefRetweeet}><i className="fa fa-retweet" /></a></li>
                    <li><a href={props.hrefShoppongCart}><i className="fa fa-shopping-cart" /></a></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href={props.href}>{props.name}</a></h6>
                <h5>${props.price}</h5>
            </div>
        </div>

    );
}