import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const custon404 = () => (
  <Layout>
  <div className="text-center">
    <h1>404</h1>
    <p>
      page doesn't exist. Go {" "}
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </div>
  </Layout>
);

export default custon404;
