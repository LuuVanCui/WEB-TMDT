import ContactItem from './ContactItem';
import ContactMap from './ContactMapDetail';
export default function Contact(props) {
    return (
        <div>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <ContactItem
                            contactIcon="icon_phone"
                            contactHeaer="Phone"
                            headerDetail="+01-3-8888-6868"
                        />
                        <ContactItem
                            contactIcon="icon_pin_alt"
                            contactHeaer="Address"
                            headerDetail="60-49 Road 11378 New York"
                        />
                        <ContactItem
                            contactIcon="icon_clock_alt"
                            contactHeaer="Open time"
                            headerDetail="10:00 am to 23:00 pm"
                        />
                        <ContactItem
                            contactIcon="icon_mail_alt"
                            contactHeaer="Email"
                            headerDetail="hello@colorlib.com"
                        />
                    </div>
                </div>
            </section>
            
            <div className="map">
                {/* <iframe
                    src="https://www.google.com/maps/place/S%C6%B0+ph%E1%BA%A1m+k%C4%A9+thu%E1%BA%ADt/@10.8519192,106.770246,17z/data=!3m1!4b1!4m5!3m4!1s0x317527cb0f5a8619:0x63a2017705af1f98!8m2!3d10.8519139!4d106.7724347"
                    height="500" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">

                    </iframe> */}

                <ContactMap 
                name = "Trường đại học sư phạm kĩ thuật"
                phone = "Phone: +12-345-6789"
                address = "Số 1 Võ Văn Ngân"
                />
            </div>

            <div className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea placeholder="Your message" defaultValue={""} />
                                <button type="submit" className="site-btn">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}