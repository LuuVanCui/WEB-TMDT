export default function ContactItem(props) {
    return (
        <div classname="col-lg-3 col-md-3 col-sm-6 text-center">
            <div classname="contact__widget">
                <span classname={props.contactIcon}>
                    <h4>{props.contactHeaer}</h4>
                    <p>{props.headerDetail}</p>
                </span></div>
        </div>

    );
}