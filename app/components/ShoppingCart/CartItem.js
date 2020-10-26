

export default function CartItem(props) {
    return(
        <tr>
            <td className="shoping__cart__item">
                <img src={props.img} alt />
                <h5>{props.name}</h5>
            </td>
            <td className="shoping__cart__price">
                {props.price}
                </td>
            <td className="shoping__cart__quantity">
                <div className="quantity">
                    <div className="pro-qty"><span className="dec qtybtn">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="inc qtybtn">+</span></div>
                </div>
            </td>
            <td className="shoping__cart__total">
                {props.total}
                </td>
            <td className="shoping__cart__item__close">
                <span className="icon_close" />
            </td>
        </tr>
    );
}