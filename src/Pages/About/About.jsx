import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="bg-bgColor" id="about">
      <div className="mt-24 max-w-screen-xl mx-auto px-4">
        <SectionTitle header={"About Me"}></SectionTitle>
        <div>
          <p className="text-justify">
            Hello! I'm <span className="text-primaryColor">Najmul Shaon</span>,
            a passionate <span className="font-semibold">MERN</span> stack
            developer with a love for coding. From the moment I wrote my first
            line of code, I knew I had found my calling. Coding is more than
            just a skill to me—it's a way of thinking, a language that bridges
            imagination and reality. <br />
            Every day, I dive deep into the world of technology, constantly
            exploring new frameworks and techniques. Building scalable,
            efficient, and user-friendly applications isn’t just my job—it’s my
            passion....
            <br />
            {isExpanded && (
              <>
                But let’s be real—the life of a developer is a constant cycle of
                creativity, challenges, and… bugs. And while others might find
                them frustrating, I’ve learned to embrace them. Errors and bugs
                are like my “soft drinks”—they fuel my drive, challenge my
                thinking, and push me to improve. It's through these hurdles
                that I grow and sharpen my skills. Whether it’s creating
                full-stack applications or exploring new technologies, I’m
                always excited to take on the next challenge. My mission is
                simple: To build innovative and impactful solutions that not
                only solve problems but inspire others along the way. Let’s code
                together and turn ideas into reality! <br />
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primaryColor cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more..."}
            </button>
          </p>
        </div>
        {/* social icons  */}
        <div className="flex items-center gap-6 text-3xl justify-center">
          {/* <a
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
          <a href="mailto:najmul.nh.shaon@gmail.com" className="text-4xl">
            <FaRegEnvelope />
          </a> */}
          <a href="https://github.com/Najmul-Shaon">
            <button className="bg-transparent border-2 border-white text-[#171515] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor transition-all duration-300 transform hover:scale-105">
              <FaGithub className="inline-block mr-2 text-3xl" /> Github
            </button>
          </a>
          <a href="mailto:najmul.nh.shaon@gmail.com">
            <button className="bg-transparent border-2 border-white text-teal-900 px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaRegEnvelope className="inline-block mr-2 text-3xl" />{" "}
              <span className="text-black">Mail</span>
            </button>
          </a>

          <a href="https://www.linkedin.com/in/najmul-hasan-75a096205">
            <button className="bg-transparent border-2 border-white text-[#0077B5] px-4 py-2 rounded-lg text-2xl font-bold hover:bg-primaryColor hover:border-borderColor hover:text-black transition-all duration-300 transform hover:scale-105">
              <FaLinkedin className="inline-block mr-2 text-3xl" /> Linkedin
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
