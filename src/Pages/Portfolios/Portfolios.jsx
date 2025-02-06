import React from "react";
import Skills from "../Skills/Skills";
import SectionTitle from "../../Components/SectionTitle";
import { Link, Outlet } from "react-router-dom";

const Portfolios = () => {
  return (
    <div className="mt-20 bg-bgColor">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <SectionTitle header={"Portfolio Showcase"}></SectionTitle>

        <p className="text-center mt-4 mb-10 text-lg">
          Explore a curated collection of my projects, showcasing innovative
          designs and solutions that reflect my passion for web development and
          creativity.
        </p>

        {/* portfolio navigation  */}
        <div className="flex justify-evenly border py-4 rounded-2xl shadow-xl shadow-primaryColor/20">
          <Link to="/portfolio/projects">
            <button className="btn btn-dash btn-md md:btn-lg">Projects</button>
          </Link>
          <Link to="/portfolio/skills">
            <button className="btn btn-dash btn-md md:btn-lg">Skills</button>
          </Link>
          <Link to="/portfolio/education">
            <button className="btn btn-dash btn-md md:btn-lg">Education</button>
          </Link>
          <Link to="/portfolio/experience">
            <button className="btn btn-dash btn-md md:btn-lg">
              Experience
            </button>
          </Link>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
