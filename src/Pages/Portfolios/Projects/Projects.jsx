import React from "react";
import { FaGithub, FaNodeJs, FaReact, FaRegEye } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBracketsContainEnd, TbBracketsContainStart } from "react-icons/tb";
import { Link } from "react-router-dom";

const Projects = () => {
  const handleLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* project 01   */}
      <div className="bg-white shadow-lg shadow-primaryColor/40 rounded-xl overflow-hidden border border-gray-200 hover:scale-101 hover:shadow-2xl">
        <img
          className="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/4492137/pexels-photo-4492137.jpeg"
          alt="Course"
        />
        <div className="p-4">
          <div className="flex justify-center text-2xl gap-2 mb-2">
            <span className="text-black/50">
              <TbBracketsContainStart />
            </span>
            <span className="text-[#61DBFB]">
              <FaReact></FaReact>
            </span>
            <span className="text-[#47A248]">
              <SiMongodb />
            </span>
            <span className="text-[#000000]">
              <SiExpress />
            </span>
            <span className="text-[#8CC84B]">
              <FaNodeJs />
            </span>
            <span className="text-black/50">
              <TbBracketsContainEnd />
            </span>
          </div>
          <h3 className="text-lg font-semibold text-textColor">
            Beginner Diploma In Basic English Grammar - Better Search Rang!
          </h3>
          <p className="text-textColor my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sunt
            ullam obcaecati quo tempore nam.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link onClick={() => handleLink("https://github.com/Najmul-Shaon")}>
              <button className="btn my-4 w-full text-lg border border-borderColor hover:bg-primaryColor hover:text-white">
                <FaGithub /> Client Repo
              </button>
            </Link>

            <Link onClick={() => handleLink("https://github.com/Najmul-Shaon")}>
              <button className="btn  my-4 w-full text-lg border border-borderColor hover:bg-primaryColor hover:text-white">
                <FaGithub /> Server Repo
              </button>
            </Link>
          </div>
          <Link onClick={() => handleLink("https://github.com/Najmul-Shaon")}>
            <button className="btn bg-primaryColor text-white border border-borderColor w-full text-lg">
              <FaRegEye></FaRegEye> Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
