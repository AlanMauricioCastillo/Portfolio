import "../public/styles.css";
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Mauricio A. Castillo — Full Stack Engineer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
