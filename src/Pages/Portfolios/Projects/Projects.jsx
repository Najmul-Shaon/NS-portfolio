import matchMateImg from "../../../assets/MatchMate/card2.png";
import learnLoungeImg from "../../../assets/LearnLounge/home1.png";
import crowdCubeImg from "../../../assets/CrowdCube/home1.png";
import { FaGithub, FaNodeJs, FaReact, FaRegEye } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBracketsContainEnd, TbBracketsContainStart } from "react-icons/tb";

const Projects = () => {
  const handleLink = (link) => {
    window.open(link, "_blank");
  };

  const projects = [
    {
      id: "matchMate",
      projectName: "Match Mate",
      projectImg: matchMateImg,
      tech: [
        <FaReact className="text-[#61DBFB]" />,

        <SiMongodb className="text-[#47A248]" />,

        <SiExpress className="text-[#000000]" />,

        <FaNodeJs className="text-[#8CC84B]" />,
      ],
      details:
        "The ultimate marriage media application designed to help you find your ideal partner and build your dream story. Our platform is user-friendly, feature-rich, and crafted to make your journey to love seamless and memorable.",
      client: "https://github.com/Najmul-Shaon/Match-Mate-Client",
      server: "https://github.com/Najmul-Shaon/Match-Mate-Server",
      live: "https://matchmate-de063.firebaseapp.com",
    },
    {
      id: "learnLounge",
      projectName: "The Learn Lounge",
      projectImg: learnLoungeImg,
      tech: [
        <FaReact className="text-[#61DBFB]" />,

        <SiMongodb className="text-[#47A248]" />,

        <SiExpress className="text-[#000000]" />,

        <FaNodeJs className="text-[#8CC84B]" />,
      ],
      details:
        "Learn Lounge is a global platform that allows students to engage in group studies, create assignments, and evaluate each other's work. The platform encourages peer learning and knowledge sharing among students, ensuring an interactive and productive educational experience.",
      client: "https://github.com/Najmul-Shaon/Learn-Lounge-Client",
      server: "https://github.com/Najmul-Shaon/Learn-Lounge-Server",
      live: "https://learn--lounge.web.app",
    },
    {
      id: "crowdCube",
      projectName: "Crowd Cube",
      projectImg: crowdCubeImg,
      tech: [
        <FaReact className="text-[#61DBFB]" />,

        <SiMongodb className="text-[#47A248]" />,

        <SiExpress className="text-[#000000]" />,

        <FaNodeJs className="text-[#8CC84B]" />,
      ],
      details:
        "Crowd Cube is a user-friendly donation platform that enables users to create, manage, and contribute to fundraising campaigns. With an intuitive interface, secure authentication, and a robust set of features, Crowd Cube makes fundraising accessible for everyone.",
      client: "https://github.com/Najmul-Shaon/crowdcube-client",
      server: "https://github.com/Najmul-Shaon/crowncube-server",
      live: "https://crowd-1342c.firebaseapp.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-bgColor shadow-lg shadow-primaryColor/40 rounded-xl overflow-hidden border border-gray-200 hover:scale-101 hover:shadow-2xl p-4"
        >
          <img
            className="w-full h-48 object-cover border border-dashed border-borderColor rounded-xl"
            src={project.projectImg}
            alt="learn lounge image"
          />

          <div className="p-4 flex flex-col space-y-2.5">
            <div className="flex-grow">
              <div className="flex justify-center text-2xl gap-2 mb-2">
                <span className="text-black/50">
                  <TbBracketsContainStart />
                </span>
                {project.tech.map((singleTech, i) => (
                  <span key={i}>{singleTech}</span>
                ))}

                <span className="text-black/50">
                  <TbBracketsContainEnd />
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-textColor">
                {project.projectName}
              </h3>
              <p className="text-textColor my-2 text-justify">
                {project.details}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a href={`${project.client}`} target="_blank">
                <button className="btn w-full text-lg border border-borderColor hover:bg-primaryColor hover:text-white">
                  <FaGithub /> Client Repo
                </button>
              </a>
              <a href={`${project.server}`} target="_blank">
                <button className="btn w-full text-lg border border-borderColor hover:bg-primaryColor hover:text-white">
                  <FaGithub /> Server Repo
                </button>
              </a>

              <a
                href={`${project.live}`}
                target="_blank"
                className="col-span-2"
              >
                <button className="btn bg-primaryColor text-white border border-borderColor w-full text-lg">
                  <FaRegEye></FaRegEye> Preview
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
