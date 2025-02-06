import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bgColor">
      <div className="max-w-screen-xl mx-auto px-4 text-textColor p-4 font-caveat text-xl flex gap-2 flex-col md:flex-row items-center text-center md:justify-around">
        <p className="">
          Copyright © {new Date().getFullYear()} - by
          <span className="text-primaryColor font-bold text-xl md:text-2xl">
            {" "}
            Najmul Shaon
          </span>
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
      </div>
    </footer>
  );
};

export default Footer;
