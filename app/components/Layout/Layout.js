import PropTypes from 'prop-types';
import Search from '../Home/Search/Search';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout(props) {
    return(
        <>
            <Header />
            <Search />
                {props.children}
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.any
}