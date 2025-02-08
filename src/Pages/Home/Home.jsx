import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Najmul | Home</title>
      </Helmet>
      <div className="mt-18"></div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
