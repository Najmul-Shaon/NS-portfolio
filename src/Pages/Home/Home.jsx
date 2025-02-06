import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
          <Navbar></Navbar>
          <div className="mt-18"></div>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
