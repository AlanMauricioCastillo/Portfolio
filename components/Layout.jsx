import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import NavBar from "./NavBar";
import nProgress from "nprogress";
import classnames from "classnames";

const Layout = ({ children, title, footer = true, clas }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      nProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={clas}>
      <NavBar />
      <main className="container py-4">
      {
        title && <h1 className="text-center">{title}</h1>
      }
      {children}
      </main>

      {footer && (
        <footer className="text-primary bg-muted text-center p-2">
          <div className="container">
            <h3>Mauricio A. Castillo</h3>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
