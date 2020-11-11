import Head from 'next/head';
import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import ProductDetail from '../components/ProductDetail/ProductDetails';

export default class ProductPage extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>Product Detail</title>
                    <meta name="robots" content="noindex, follow" />
                    <meta name="description" content="" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {/* Favicon */}
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                </Head>
                <Layout>
                  <ProductDetail />
                </Layout>
            </>
        );
    }
}
