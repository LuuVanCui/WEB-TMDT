import Head from 'next/head';
import React, { Component } from 'react';

import Layout from '../components/Layout/Layout';
import HomePage from '../components/Home/Home';

export default class Home extends Component {

    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <title>RealShare</title>
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
                  <HomePage />
                </Layout>
            </>
        );
    }
}

// export async function getStaticProps() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}`);
// }
