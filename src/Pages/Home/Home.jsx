import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-18"></div>
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
