import NavBar from "./NavBar";
import  Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main className="container py-4">{children}</main>
  </div>
);

export default Layout;
