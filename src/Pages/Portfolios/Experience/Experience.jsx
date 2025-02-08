import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { GiGears } from "react-icons/gi";
import { IoIosDesktop } from "react-icons/io";

const Experience = () => {
  const [expanded, setExpanded] = useState(null);
  const JobData = [
    {
      id: "osl",
      title: "Assistant Engineer",
      icon: <GiGears className="text-blue-500" />,
      institute: "OnnoRokom Software Ltd.",
      year: "2022-2024",
      duties: [
        "Managed ERP software for education, recruitment, and assessment systems",
        "Set up Operating system and application software",
        "Assemble Computer Hardware",
        "Direct assistance to the in-house users",
        "Client support over the phone, online, or through physical visits",
      ],
    },
    {
      id: "beacon",
      title: "IT Operator",
      icon: <IoIosDesktop className="text-green-500" />,
      institute: "Beacon Pharmaceuticals Ltd.",
      year: "2020-2022",
      duties: [
        "Diagnose and troubleshoot Hardware issues",
        "Printer setup and maintenance",
        "Distribute products to all depots based on depot requisition",
        "Products Receive and Make Invoices",
        "Take Good Received Note (GRN)",
        "Create reports of expired and damaged products",
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center text-center py-6">
      <Helmet>
              <title>Najmul | Experience</title>
            </Helmet>
      <div className="w-full max-w-2xl">
        {JobData.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-2xl shadow-md mb-4 transition-all duration-300 cursor-pointer hover:shadow-lg"
            onClick={() => setExpanded(expanded === job.id ? null : job.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-textColor font-semibold">
                {job.icon} {job.title} ({job.year})
              </div>
              <span className="text-gray-500">
                {expanded === job.id ? "▲" : "▼"}
              </span>
            </div>

            {expanded === job.id && (
              <>
                <div className="flex justify-center items-center bg-bgColor py-4">
                  <div className="card w-96 bg-gradient-to-br from-[#00BDA5] to-[#007F73] shadow-xl text-white p-2 md:p-4 lg:p-6 rounded-2xl">
                    <div className="card-body text-center">
                      <h2 className="text-2xl font-bold">{job.institute}</h2>
                      <p className="text-lg mt-2">
                        Year: <span className="font-semibold">{job.year}</span>
                      </p>
                      <div>
                        <ul className="list-disc text-start text-lg">
                          {job.duties.map((duty) => (
                            <li>{duty}</li>
                          ))}
                        </ul>
                      </div>
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
};

export default Experience;
