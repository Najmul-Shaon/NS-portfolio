import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 font-caveat text-xl flex justify-around">
      <p className="flex items-center">
        Copyright © {new Date().getFullYear()} - All right reserved by{" "}
        <span className="text-primaryColor">Najmul Shaon</span>
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
      </div>
    </footer>
  );
};

export default Footer;
