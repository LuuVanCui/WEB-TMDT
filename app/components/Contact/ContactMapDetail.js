export default function ContactMap(props) {
    return (
        <div className="map-inside">
            <i className="icon_pin" />
            <div className="inside-widget">
                <h4>{props.name}</h4>
                <ul>
                    <li>Phone: {props.phone}</li>
                    <li>Add: {props.address}</li>
                </ul>
            </div>
        </div>

    );
}