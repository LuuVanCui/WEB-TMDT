//import { loadGetInitialProps } from "next/dist/next-server/lib/utils";


export default function DetailText(props) {
    return(
        <div className="product__details__text">
            <h3>{props.productName}</h3>
            <div className="product__details__rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <span>(18 reviews)</span>
            </div>
            <div className="product__details__price">${props.productPrice}</div>
            <p>{props.productDiscription}</p>
            <div className="product__details__quantity">
                <div className="quantity">
                    <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                    </div>
                </div>
            </div>
            <a href="#" className="primary-btn">ADD TO CARD</a>
            <a href="#" className="heart-icon"><span className="icon_heart_alt" /></a>
            <ul>
                <li><b>Availability</b> <span>{props.productAvailability}</span></li>
                <li><b>Shipping</b> <span>{props.productShipping} <samp>Free pickup today</samp></span></li>
                <li><b>Weight</b> <span>{props.productWeight}</span></li>
                <li><b>Share on</b>
                    <div className="share">
                        <a href={props.faceLink}><i className="fa fa-facebook" /></a>
                        <a href={props.instaLink}><i className="fa fa-twitter" /></a>
                        <a href={props.twitterLink}><i className="fa fa-instagram" /></a>
                        <a href={props.printerestLink}><i className="fa fa-pinterest" /></a>
                    </div>
                </li>
            </ul>
        </div>
    );
}