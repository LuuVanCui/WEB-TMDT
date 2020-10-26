import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props) {
    return(
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.any
}