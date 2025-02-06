import authorImg from "../../../assets/Author_Img3.png";
import bgImg from "../../../assets/bg.jpg";

const Banner = () => {
  return (
    // <div
    //   className="bg-center bg-cover"
    //   style={{ backgroundImage: `url(${bgImg})` }}
    // >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto px-4">
        {/* banner content  */}
        <div className="order-2 md:order-none">
          <h4 className="uppercase text-lg text-primaryColor font-semibold">i am</h4>
          <h1 className="text-5xl font-bold">Najmul Shaon</h1>
          <h2>Web Developer</h2>
        </div>
        {/* banner image  */}
        <div className="order-1 md:order-none">
          <img src={authorImg} alt="" />
        </div>
      </div>
    // </div>
  );
};

export default Banner;
