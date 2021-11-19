import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import NavBar from "./NavBar";
import nProgress from "nprogress";

const Layout = ({ children }) => {
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
    <>
      <NavBar />
      <main className="container py-4">{children}</main>
      <footer className="text-primary text-center p-2">
        <div className="container">
        <h3>Mauricio A. Castillo</h3>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          
        </div>
      </footer>
    </>
  );
};

export default Layout;
