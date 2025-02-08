import {
  FaDotCircle,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaRegEye,
  FaRegHandPointRight,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import matchMateImg1 from "../../../../assets/MatchMate/card1.png";
import matchMateImg2 from "../../../../assets/MatchMate/card2.png";
import matchMateImg3 from "../../../../assets/MatchMate/card3.png";
import matchMateImg4 from "../../../../assets/MatchMate/card4.png";
import matchMateImg5 from "../../../../assets/MatchMate/card5.png";
import matchMateImg6 from "../../../../assets/MatchMate/card6.png";
import learnLoungeImg1 from "../../../../assets/LearnLounge/home1.png";
import learnLoungeImg2 from "../../../../assets/LearnLounge/home2.png";
import learnLoungeImg3 from "../../../../assets/LearnLounge/home3.png";
import learnLoungeImg4 from "../../../../assets/LearnLounge/home4.png";
import crowdCubeImg1 from "../../../../assets/CrowdCube/home1.png";
import crowdCubeImg2 from "../../../../assets/CrowdCube/home2.png";
import crowdCubeImg3 from "../../../../assets/CrowdCube/home3.png";
import crowdCubeImg4 from "../../../../assets/CrowdCube/home4.png";
import crowdCubeImg5 from "../../../../assets/CrowdCube/home5.png";
import kindClothImg1 from "../../../../assets/kindCloth/home1.png";
import kindClothImg2 from "../../../../assets/kindCloth/home2.png";
import kindClothImg3 from "../../../../assets/kindCloth/home3.png";
import kindClothImg4 from "../../../../assets/kindCloth/home4.png";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../../Components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const ProjectDetails = () => {
  const { id } = useParams();

  const projects = [
    {
      id: "matchMate",
      projectName: "Match Mate",
      projectImg: [
        matchMateImg1,
        matchMateImg2,
        matchMateImg3,
        matchMateImg4,
        matchMateImg5,
        matchMateImg6,
      ],
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
      challanges: [
        {
          title: "Ensuring Data Privacy and Security",
          description:
            "Protecting user data with encryption, authentication security, and compliance with privacy regulations was a major challenge.",
        },
        {
          title: "User Experience (UX) and Interface Design",
          description:
            "Designing a user-friendly, visually appealing interface for diverse users required iterative improvements.",
        },
        {
          title: "Scalability and Performance Optimization",
          description:
            "Handling a growing user base, optimizing database queries, and ensuring smooth performance under high traffic loads were key challenges.",
        },
        {
          title: "Seamless Integration with Third-Party Services",
          description:
            "Integrating payment gateways, chat functionalities, and authentication providers required handling API dependencies and version updates.",
        },
        {
          title: "Managing Development Timelines and Resource Allocation",
          description:
            "Balancing feature development, bug fixing, and testing within deadlines required effective project management and collaboration.",
        },
      ],
    },
    {
      id: "learnLounge",
      projectName: "The Learn Lounge",
      projectImg: [
        learnLoungeImg1,
        learnLoungeImg2,
        learnLoungeImg3,
        learnLoungeImg4,
      ],
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
      challanges: [
        {
          title: "Ensuring Real-Time Collaboration and Synchronization",
          description:
            "Implementing real-time interactions, live assignment evaluations, and peer feedback, required efficient WebSocket and database synchronization to prevent data inconsistencies.",
        },
        {
          title: "Scalability and Performance Optimization",
          description:
            "Handling high concurrent user activity without compromising speed required optimization of server performance, database queries, and API response times.",
        },
        {
          title: "User Experience (UX) and Accessibility",
          description:
            "Designing an intuitive and inclusive interface that accommodates students of varying technical proficiency while ensuring smooth cross-device compatibility was a challenge.",
        },
        {
          title: "Managing Development Timelines and Feature Prioritization",
          description:
            "Balancing feature development, bug fixing, and user feedback within deadlines required effective project management and iterative testing.",
        },
      ],
    },
    {
      id: "crowdCube",
      projectName: "Crowd Cube",
      projectImg: [
        crowdCubeImg1,
        crowdCubeImg2,
        crowdCubeImg3,
        crowdCubeImg4,
        crowdCubeImg5,
      ],
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
      challanges: [
        {
          title: "Scalability and Performance Optimization",
          description:
            "Handling a growing number of users and donation transactions required optimizing database queries, API responses, and server infrastructure to ensure smooth performance.",
        },
        {
          title: "Building an Intuitive User Interface",
          description:
            "Creating a seamless and easy-to-use interface for both campaign creators and donors required extensive UX research and iterative design improvements.",
        },
        {
          title: "Bug Fixing & Maintenance",
          description:
            "Addressing software bugs, improving system stability, and ensuring seamless updates without disrupting user experience was a constant challenge.",
        },
      ],
    },
    {
      id: "kindCloth",
      projectName: "Kind Cloth",
      projectImg: [kindClothImg1, kindClothImg2, kindClothImg3, kindClothImg4],
      tech: [<FaReact className="text-[#61DBFB]" />],
      details:
        "A simple yet functional donation platform built with React. Users can make donations and view their donation details seamlessly. The intuitive interface ensures a smooth experience, making contributions effortless.",
      client: "https://github.com/Najmul-Shaon/Kind-Cloth",
      live: "https://kind-cloth.web.app/",
      challanges: [
        {
          title: "Dynamic Campaign Management",
          description:
            "Handling the creation, updating, and deletion of campaigns while ensuring real-time updates required efficient state management and database synchronization.",
        },
        {
          title: "User Authentication Control",
          description:
            "Ensuring that users could only access and manage their own campaigns and donations required implementing secure authentication.",
        },
        {
          title: "Efficient State Management",
          description:
            "Managing multiple campaign-related states (all campaigns, user-specific campaigns, and donations) without performance issues required optimizing API calls.",
        },
        {
          title: "Real-Time Data Updates",
          description:
            "Ensuring users see the latest campaign and donation information without manual refresh required.",
        },
        {
          title: "Bug Fixing and Debugging",
          description:
            "Resolving issues related to campaign creation, incorrect data rendering, and payment failures required extensive debugging and error handling.",
        },
        {
          title: "Mobile Responsiveness and UI Optimization",
          description:
            "Designing an intuitive and visually appealing interface that works seamlessly across different screen sizes required thorough testing and CSS optimization.",
        },
        {
          title: "Time Management and Feature Prioritization",
          description:
            "Balancing core features like campaign creation and donation tracking while maintaining a stable and scalable codebase required effective project planning.",
        },
      ],
    },
  ];

  const singleProject = projects.filter((project) => project?.id === id);
  console.log(singleProject[0]?.projectImg);

  return (
    <div className="mt-20 max-w-screen-xl mx-auto px-4">
      <SectionTitle
        header={`Detatils of ${singleProject[0]?.projectName}`}
      ></SectionTitle>
      <div className="max-w-2xl mx-auto mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {singleProject[0]?.projectImg?.map((img, i) => (
            <SwiperSlide>{<img className="" src={img}></img>}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-4 my-8">
        <a
          href={`${singleProject[0].live}`}
          target="_blank"
          className="col-span-2"
        >
          <button className="btn bg-primaryColor text-white border border-borderColor w-full text-lg">
            <FaRegEye></FaRegEye> Preview
          </button>
        </a>
        <a
          href={singleProject[0].client}
          target="_blank"
          className="col-span-2"
        >
          <button className="btn w-full text-lg border border-borderColor hover:bg-primaryColor hover:text-white">
            <FaGithub></FaGithub> Client
          </button>
        </a>
      </div>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-textColor">Tech Stack:</h3>
          <div className="flex gap-6 mt-4">
            {singleProject[0]?.tech.map((singleIcon, i) => (
              <p className="text-6xl" key={i}>
                {singleIcon}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-2xl text-textColor">
            Brief Description
          </h3>
          <p className="text-textColor text-lg text-justify">
            {singleProject[0].details}
          </p>
        </div>
        {/* challenge section  */}
        <div className="space-y-2.5">
          <h3 className="text-2xl font-semibold text-textColor">Challanges</h3>
          {singleProject[0].challanges.map((singleChallange) => (
            <div>
              <h4 className="text-lg font-semibold text-textColor flex gap-2 items-center">
                <span className="text-primaryColor">
                  <FaDotCircle></FaDotCircle>{" "}
                </span>

                {singleChallange.title}
              </h4>
              <p className="text-textColor text-lg text-justify">
                {singleChallange.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
