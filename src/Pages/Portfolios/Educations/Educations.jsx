import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGraduationCap, FaBook } from "react-icons/fa";

export default function Educations() {
  const [expanded, setExpanded] = useState(null);

  const educationData = [
    {
      id: "bsc",
      title: "BSc in CSE",
      icon: <FaGraduationCap className="text-blue-500" />,
      institute: "Dhaka International University",
      year: "2022-2025",
      result: "Appeared",
      details:
        "Completed BSc in Computer Science & Engineering with expertise in software development and problem-solving.",
    },
    {
      id: "diploma",
      title: "Diploma in Computer Technology",
      icon: <FaBook className="text-green-500" />,
      institute: "Barisal Polytechnic Institute",
      year: "2015-2019",
      result: "3.32 out of 4.00",
      details:
        "Gained foundational knowledge in computer technology, networking, and system administration.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center py-6">
      <Helmet>
        <title>Najmul | Education</title>
      </Helmet>
      <div className="w-full max-w-2xl">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white p-4 rounded-2xl shadow-md mb-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            onClick={() => setExpanded(expanded === edu.id ? null : edu.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-textColor font-semibold">
                {edu.icon} {edu.title} ({edu.year})
              </div>
              <span className="text-gray-500">
                {expanded === edu.id ? "▲" : "▼"}
              </span>
            </div>

            {expanded === edu.id && (
              <>
                <div className="flex justify-center items-center bg-bgColor py-4">
                  <div className="card w-96 bg-gradient-to-br from-[#00BDA5] to-[#007F73] shadow-xl text-white p-2 md:p-4 lg:p-6 rounded-2xl">
                    <div className="card-body text-center">
                      <h2 className="text-2xl font-bold">{edu.institute}</h2>
                      <p className="text-lg mt-2">
                        Graduation Year:{" "}
                        <span className="font-semibold">{edu.year}</span>
                      </p>
                      <p className="text-lg mt-1">
                        Result:{" "}
                        <span className="font-semibold">{edu.result}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
