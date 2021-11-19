import "bootswatch/dist/vapor/bootstrap.min.css";
import "../public/styles.css";
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="Alan Castillo Portfolio" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
