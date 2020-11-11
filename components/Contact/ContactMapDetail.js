export default function ContactMap(props) {
    return (
        <div classname="map-inside">
            <i classname="icon_pin" />
            <div classname="inside-widget">
                <h4>{props.name}</h4>
                <ul>
                    <li>Phone: {props.phone}</li>
                    <li>Add: {props.address}</li>
                </ul>
            </div>
        </div>

    );
}