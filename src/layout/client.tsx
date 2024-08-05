import Header from "../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";

const Client = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Client;
