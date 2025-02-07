import SectionTitle from "../../Components/SectionTitle";
import { useState } from "react";
import {
  FaLaptopCode,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Educations from "./Educations/Educations";
import Experience from "./Experience/Experience";

const Portfolios = () => {
  const [active, setActive] = useState("projects");

  const tabs = [
    { name: "projects", icon: <FaLaptopCode />, label: "Projects" },
    { name: "skills", icon: <FaTools />, label: "Skills" },
    { name: "experience", icon: <FaBriefcase />, label: "Experience" },
    { name: "education", icon: <FaGraduationCap />, label: "Education" },
  ];
  return (
    <div className="mt-20 bg-bgColor">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <SectionTitle header={"Portfolio Showcase"}></SectionTitle>

        <p className="text-center mt-4 mb-10 text-lg">
          Explore a curated collection of my projects, showcasing innovative
          designs and solutions that reflect my passion for web development and
          creativity.
        </p>

        {/* *******************************  */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="flex gap-4 p-2 rounded-full shadow-lg shadow-primaryColor">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActive(tab.name)}
                className={`px-6 py-3 flex items-center gap-2 rounded-full transition-all ${
                  active === tab.name
                    ? "bg-teal-500 text-white shadow-lg scale-110"
                    : "bg-gray-600 hover:bg-teal-400 hover:text-black"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl shadow-lg w-full">
            {active === "projects" && <Projects></Projects>}
            {active === "skills" && <Skills></Skills>}
            {active === "experience" && <Experience></Experience>}
            {active === "education" && <Educations></Educations>}
          </div>
        </div>
        {/* *******************************  */}

        {/* portfolio navigation  */}
        {/* <div className="flex justify-evenly border py-4 rounded-2xl shadow-xl shadow-primaryColor/20">
          <Link to="/portfolio/projects">
            <button className="btn btn-dash btn-md md:btn-lg">Projects</button>
          </Link>
          <Link to="/portfolio/skills">
            <button className="btn btn-dash btn-md md:btn-lg">Skills</button>
          </Link>
          <Link to="/portfolio/experience">
            <button className="btn btn-dash btn-md md:btn-lg">
              Experience
            </button>
          </Link>
          <Link to="/portfolio/education">
            <button className="btn btn-dash btn-md md:btn-lg">Education</button>
          </Link>
        </div> */}
        {/* ****************  */}
        {/* <div className="grid grid-cols-4 justify-evenly border rounded-2xl shadow-xl shadow-primaryColor/20 py-4 gap-3">
          <Link to="/portfolio/projects">
            <p className=" text-center text-sm md:text-lg">&lt;Projects/&gt;</p>
          </Link>
          <Link to="/portfolio/skills">
            <p className=" text-center text-sm md:text-lg">&lt;Skills/&gt;</p>
          </Link>
          <Link to="/portfolio/experience">
            <p className=" text-center text-sm md:text-lg">
              &lt;Experience/&gt;
            </p>
          </Link>
          <Link to="/portfolio/education">
            <p className=" text-center text-sm md:text-lg">
              &lt;Education/&gt;
            </p>
          </Link>
        </div> */}
        {/* <div>
          <Outlet></Outlet>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolios;
