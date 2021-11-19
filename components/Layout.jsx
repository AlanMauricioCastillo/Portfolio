import NavBar from "./NavBar";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className="container py-4">
    {children}
    </main>
    <footer className="text-white text-center p-2">
      <div className="container">
        <h2>Mauricio Castillo</h2>
        <p>&copy;{new Date().getFullYear()}</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  </>
);

export default Layout;
