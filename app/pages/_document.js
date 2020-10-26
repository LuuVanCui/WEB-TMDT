import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />
                    <link rel="stylesheet" href="/css/font-awesome.min.css" type="text/css" />
                    <link rel="stylesheet" href="/css/elegant-icons.css" type="text/css" />
                    <link rel="stylesheet" href="/css/nice-select.css" type="text/css" />
                    <link rel="stylesheet" href="/css/jquery-ui.min.css" type="text/css" />
                    <link rel="stylesheet" href="/css/owl.carousel.min.css" type="text/css" />
                    <link rel="stylesheet" href="/css/slicknav.min.css" type="text/css" />
                    <link rel="stylesheet" href="/css/style.css" type="text/css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/js/jquery-3.3.1.min.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/jquery.nice-select.min.js"></script>
                    <script src="/js/jquery-ui.min.js"></script>
                    <script src="/js/jquery.slicknav.js"></script>
                    <script src="/js/mixitup.min.js"></script>
                    <script src="/js/owl.carousel.min.js"></script>
                    <script src="/js/main.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
