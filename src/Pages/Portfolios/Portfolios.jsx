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
    <div className="mt-18 bg-bgColor mb-12">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <SectionTitle header={"Portfolio Showcase"}></SectionTitle>

        <p className="text-center mt-4 mb-10 text-lg">
          Explore a curated collection of my projects, showcasing innovative
          designs and solutions that reflect my passion for web development and
          creativity.
        </p>

        {/* *******************************  */}
        <div className="flex flex-col items-center text-center text-white">
          <div className="flex flex-wrap justify-center gap-3 p-3 rounded-full shadow-lg shadow-primaryColor">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActive(tab.name)}
                className={`px-4 py-2 flex items-center gap-2 rounded-full text-sm sm:text-base transition-all ${
                  active === tab.name
                    ? "bg-teal-500 text-white shadow-lg scale-110 border border-borderColor"
                    : "bg-bgColor border text-textColor border-borderColor hover:bg-primaryColor"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl shadow-lg w-full bg-primaryColor/5">
            {active === "projects" && <Projects></Projects>}
            {active === "skills" && <Skills></Skills>}
            {active === "experience" && <Experience></Experience>}
            {active === "education" && <Educations></Educations>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
