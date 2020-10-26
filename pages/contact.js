import Contact from '../components/Contact/Contact';
import Head from '../components/Home/Home'
import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';


export default class ContactPage extends Component {
    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>Contact with us</title>
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
                  <Contact />
                </Layout>
            </>
        );
    }
}
