export default function ContactItem(props) {
    return (
        <div className="col-lg-3 col-md-3 col-sm-6 text-center">
            <div className="contact__widget">
                <span className={props.contactIcon}>
                    <h4>{props.contactHeaer}</h4>
                    <p>{props.headerDetail}</p>
                </span></div>
        </div>

    );
}