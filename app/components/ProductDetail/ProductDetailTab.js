export default function ProductTab(props) {
    return (
        <div>
            <div className="tab-pane" id={props.idTab} role="tabpanel">
                <div className="product__details__tab__desc">
                    <h6>{props.tabHeadDesc}</h6>
                    <p>{props.tabDetailDesc}</p>
                </div>
            </div>
        </div>

    );
}