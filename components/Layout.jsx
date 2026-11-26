import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import nProgress from "nprogress";

const Layout = ({ children, title, description, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => nProgress.start();
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());
    router.events.on("routeChangeError", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {title && <title>{title} — Mauricio A. Castillo</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <NavBar />
      <main className="container">{children}</main>
      {footer && (
        <footer className="footer">
          <div className="container">
            <p className="name">Mauricio A. Castillo</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
