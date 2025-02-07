import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Educations = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };
  return (
    <div className="mt-10 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-2xl p-6 shadow-lg shadow-primaryColor rounded-xl bg-bgColor my-6">
        <div className="flex flex-col items-center justify-center bg-gray-50 p-10 w-full rounded-xl">
          {/* <h2 className="text-4xl font-bold text-gray-800 mb-10">
            My Education Journey
          </h2> */}

          <ul className="space-y-8 w-full">
            {/* Step 1: BSc in CSE */}
            <li className="relative">
              <div
                className={`w-2.5 h-2.5 rounded-full bg-${
                  activeStep === "bsc" ? "blue" : "gray"
                }-500 absolute left-0 -top-2`}
              />
              <button
                onClick={() => toggleStep("bsc")}
                className="flex items-center space-x-4 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 pl-10"
              >
                <FaGraduationCap className="w-6 h-6 text-blue-500" />
                <span>BSc in CSE</span>
              </button>
              {activeStep === "bsc" && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-4 w-80 border-l-4 border-blue-500 ml-10">
                  <h3 className="text-xl font-semibold mb-2">
                    Bachelor of Science in CSE
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dhaka International University, 2021 - 2025
                  </p>
                  <p className="text-gray-600">Result: (Appeared)</p>
                </div>
              )}
            </li>

            {/* Step 2: Diploma in Computer Technology */}
            <li className="relative">
              <div
                className={`w-2.5 h-2.5 rounded-full bg-${
                  activeStep === "diploma" ? "green" : "gray"
                }-500 absolute left-0 -top-2`}
              />
              <button
                onClick={() => toggleStep("diploma")}
                className="flex items-center space-x-4 text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300 pl-10"
              >
                <FaLaptopCode className="w-6 h-6 text-green-500" />
                <span>Diploma in Computer Technology</span>
              </button>
              {activeStep === "diploma" && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-4 w-80 border-l-4 border-green-500 ml-10">
                  <h3 className="text-xl font-semibold mb-2">
                    Diploma in Computer Technology
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Barisal Polytechnic Institute, 2015 - 2019
                  </p>
                  <p className="text-gray-00">Result: 3.32 out of 4.00</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Educations;
