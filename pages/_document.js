import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Alan Castillo Portfolio" />
        </Head>
          <body>
            <Main />
            <NextScript />
            <div id="modal-root"></div>
          </body>
      </Html>
    )
  }
}

export default MyDocument

