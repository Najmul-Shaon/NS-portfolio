import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="font-dosis">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
