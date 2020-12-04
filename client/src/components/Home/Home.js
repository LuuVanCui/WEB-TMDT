import React from 'react';
import Search from './Search/Search';
import Layout from '../Layout/Layout';
import Feature from './Features/Features';

export default class Home extends React.Component {
    
    componentDidMount() {
        document.title = "Trang chủ - nông sản 3 anh em";
    }

    render() {
        return(
            <>
                <Layout>
                   <Search />
                   <Feature />
                </Layout>
            </>
        );
    }
}