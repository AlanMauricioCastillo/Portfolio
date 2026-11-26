import Layout from "../components/Layout";
import Link from "next/link";

const Custom404 = () => (
  <Layout title="Page not found" footer={false}>
    <div className="centered">
      <p className="error-code">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for doesn&apos;t exist.</p>
      <Link href="/">
        <a className="btn btn-primary">Back to home</a>
      </Link>
    </div>
  </Layout>
);

export default Custom404;
