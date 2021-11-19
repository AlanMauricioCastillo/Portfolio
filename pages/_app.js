import "bootswatch/dist/vapor/bootstrap.min.css";
import "../public/styles.css";
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="Alan Castillo Portfolio" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
