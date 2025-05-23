import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaRegEye,
} from "react-icons/fa";
import authorImg from "../../../assets/Author_Img1.png";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  const handleResume = () => {
    const dwUrl =
      // "https://drive.google.com/uc?export=download&id=1zAzgBeG8yRvOR1N4jEMKoIPeIUz8it_A";
      "https://drive.google.com/uc?export=download&id=1IwwpulNnCb19qO3aw-iQ3zIxonCnGH9g";
    // "https://drive.google.com/file/d/1IwwpulNnCb19qO3aw-iQ3zIxonCnGH9g/view?usp=drive_link";

    const link = document.createElement("a");
    link.href = dwUrl;
    link.download = "Resume of Najmul Shaon.pdf";
    link.click();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-xl mx-auto px-4 text-start py-8">
      {/* banner content  */}
      <div className="order-2 md:order-none space-y-4">
        <div>
          <h4 className="uppercase text-lg text-primaryColor font-semibold">
            i am
          </h4>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Najmul Shaon, a
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-primaryColor leading-18">
            <Typewriter
              text={[
                "Web Developer",
                "Frontend Developer",
                "MERN Stack Developer",
                "Full Stack Developer",
              ]}
              loop={true}
              speed={200}
            />
          </h2>
        </div>
        <p className="text-textColor text-justify leading-7">
          As a MERN Stack Developer, I transform ideas into digital
          masterpieces. With JavaScript at the core, I use React to weave
          powerful, responsive interfaces and MongoDB to store the heart of
          every project. Express and Node.js power the backend, ensuring
          flawless performance. I don’t just code—I craft stories through
          technology, building dynamic web experiences that resonate and engage.
          Let's go beyond development and create web experiences that people
          remember.
        </p>
        {/* social icons  */}
        <div className="flex items-center gap-6 text-3xl">
          <a
            href="https://github.com/Najmul-Shaon"
            target="_blank"
            className="text-[#171515]"
          >
            <FaGithub></FaGithub>
          </a>

          <a
            href="https://www.linkedin.com/in/najmul-hasan-75a096205/"
            target="_black"
            className="text-[#0077B5]"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="mailto:najmul.nh.shaon@gmail.com"
            target="_black"
            className="text-[#0077B5]"
          >
            <FaRegEnvelope></FaRegEnvelope>
          </a>
        </div>
        <div className="space-x-2">
          <Link
            onClick={handleResume}
            className="btn bg-primaryColor rounded-2xl text-white border-borderColor shadow-2xl shadow-primaryColor"
          >
            <FaArrowDown className="text-lg"></FaArrowDown>{" "}
            <span className="text-lg">Resume</span>
          </Link>
          <Link
            to="/portfolio"
            className="btn rounded-2xl text-textColor hover:text-white hover:bg-primaryColor border border-borderColor shadow-2xl shadow-primaryColor"
          >
            <FaRegEye className="text-lg"></FaRegEye>{" "}
            <span className="text-lg">See Projects</span>
          </Link>
        </div>
      </div>
      {/* banner image  */}
      <div className="order-1 md:order-none">
        <img src={authorImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
