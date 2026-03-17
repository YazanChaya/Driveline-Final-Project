import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
